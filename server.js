const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const axios = require("axios");
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
var mysql = require("mysql");
/*
 * The data source for our Frontend is this database, which can be connected with FHIR
 * */
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  port: 3306,
  database: "Treatments",
});
//This fetches the medical statements from FHIR and updates the Databases accordingly
//--> possible treatments for each condition are displayed based on past treatments to this condition stored in FIHR
//--> out application works based on a mysql database, which is synchronized with the FIHR database using /fetchDataFromFIHR
/*
 * We found sources in the internet to display details to a condition and to a medication (e.g. ); however, this isnt included here for time reasons
 *
 * We have 4 tables - patients1, medicalConditions1, treatmentsFE1 and PatientConditionsTreatment running on mysql. The sql files with
 * sample data are also in the github repo
 * */
app.get("/fetchDataFromFIHR", (req, res) => {
  axios
    .get(
      "https://fhir.y80lwhsyg23r.static-test-account.isccloud.io/MedicationStatement",
      {
        headers: {
          "x-api-key": "4rSnTSw47g4cNQ22XpAFf1wNO9mt7N8e67DFjFH1",
        },
      }
    )
    .then((resp) => {
      result = JSON.stringify(resp.data);
      medications = result.split('"resourceType":"MedicationStatement"');
      medications.forEach(function (item, index) {
        if (item.includes("Diabetes5")) {
          try {
            let condition = item
              .split('reasonCode"')[1]
              .split("display")[1]
              .split("}")[0]
              .replace(":", "");
            let treatment = item
              .split('medicationCodeableConcept"')[1]
              .split("display")[1]
              .split("}")[0]
              .replace(":", "");
            let patient = item
              .split('subject"')[1]
              .split("display")[1]
              .split("}")[0]
              .replace(": ", "");
            console.log(condition);
            console.log(treatment);
            console.log(patient);
            query1 = "INSERT INTO patients1 (name) VALUES ('" + patient + "')";
            query2 =
              "INSERT INTO medicalConditions1 (name) VALUES  ('" +
              condition +
              "')";
            con.connect(function (err) {
              con.query(query1, function (err, result, fields) {
                if (err) throw err;
              });
              con.query(query2, function (err, result, fields) {
                if (err) throw err;
                query3 =
                  "INSERT INTO treatmentsFE1 (name,medicalCond_ition) VALUES ('" +
                  treatment +
                  "','" +
                  condition +
                  "')";
                con.query(query3, function (err, result, fields) {
                  if (err) throw err;
                  console.log("fetching success");
                  //this is not a treatment, but just a potential treatment! --> getting potential treatments from treatments1
                  //  query4 = "INSERT INTO PatientConditionsTreatment (patient, cond_ition, treatment) VALUES ('"+patient+"', '"+condition+"', '"+medication+"');";
                });
              });
            });
          } catch (Exception) {
            console.log(Exception);
          }
        }
      });
    });
});
//when a patient accepts a treatment, this is updated into FIHR -> the snomed code is dummy for now, because our application only uses the "display".
//so this endpoint is called, when a patient accepts a treatment
app.post("/sendDataToFIHR", (req, res) => {
  var patient = req.query.patient;
  var condition = req.query.condition;
  var treatment = req.query.treatment;
  let JSONString =
    `{
  "resourceType": "MedicationStatement",
  "text": {
    "status": "generated",
    "div": " "
},
  "status": "active",
  "medicationCodeableConcept": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "39543009",
        "display": "` +
    treatment +
    `"
      }
    ]
  },
  "subject": {
    "reference": "Patient/1",
     "display": "` +
    patient +
    `"
  },
  "reasonCode": [
    {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "73211009",
          "display": "` +
    condition +
    `"
        }
      ]
    }
  ]
}
 `;
  console.log(JSONString[106] + JSONString[107] + JSONString[108]);
  axios
    .post(
      "https://fhir.y80lwhsyg23r.static-test-account.isccloud.io/MedicationStatement",
      JSON.parse(JSONString),
      {
        headers: {
          "Content-Type": "application/fhir+json",
          "x-api-key": "4rSnTSw47g4cNQ22XpAFf1wNO9mt7N8e67DFjFH1",
        },
      }
    )
    .then((resp) => {
      console.log(resp);
    });
});
/**
 * This Endpoint takes a patients name as input and returns:
 * - all medical conditions associated with the patient
 * - all treatments associated with the patient with all related information
 *
 * */
app.get("/getDataToPatient", (req, res) => {
  var username = req.query.username;
  //   var birthdate = req.query.birthdate;
  if (username === undefined) {
    query =
      "SELECT PatientConditionsTreatment.patient, PatientConditionsTreatment.cond_ition, treatmentsFE1.* FROM patients1 JOIN PatientConditionsTreatment JOIN treatmentsFE1 WHERE patients1.name = PatientConditionsTreatment.patient AND PatientConditionsTreatment.treatment = treatmentsFE1.name";
    query2 =
      "SELECT PatientConditionsTreatment.patient, PatientConditionsTreatment.cond_ition, treatmentsFE1.* FROM treatmentsFE1 JOIN PatientConditionsTreatment WHERE treatmentsFE1.medicalCond_ition = PatientConditionsTreatment.cond_ition";
  } else {
    query =
      "SELECT PatientConditionsTreatment.patient, PatientConditionsTreatment.cond_ition, treatmentsFE1.* FROM patients1 JOIN PatientConditionsTreatment JOIN treatmentsFE1 WHERE patients1.name = PatientConditionsTreatment.patient AND PatientConditionsTreatment.treatment = treatmentsFE1.name AND patients1.name='" +
      username +
      "'";
    query2 =
      "SELECT PatientConditionsTreatment.patient, PatientConditionsTreatment.cond_ition, treatmentsFE1.* FROM treatmentsFE1 JOIN PatientConditionsTreatment WHERE treatmentsFE1.medicalCond_ition = PatientConditionsTreatment.cond_ition AND patients1.name='" +
      username +
      "'";
  }
  con.connect(function (err) {
    con.query(query, function (err, result, fields) {
      if (err) throw err;
      //console.log(result);
      con.query(query2, function (err, result2, fields) {
        if (err) throw err;
        console.log(result2);
        resultString = "[ongoing:{"
          .concat(result)
          .concat("}, potential:{")
          .concat(result2)
          .concat("}]");
        res.send(resultString);
      });
    });
  });
});
/* This endpoint returns all medical conditions
 * */
app.get("/getMedicalConditions", (req, res) => {
  con.connect(function (err) {
    con.query(
      "SELECT * FROM medicalConditions1",
      function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
      }
    );
  });
});
/* This endpoint returns all treatments
 * */
app.get("/getTreatments", (req, res) => {
  con.connect(function (err) {
    con.query("SELECT * FROM treatmentsFE1", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      res.send(result);
    });
  });
});
// Set our backend port to be either an environment variable or port 5000
const PORT = process.env.PORT || 5003;
// Configure our server to listen on the port defined by our port variable
app.listen(PORT, () => console.log(`BACK_END_SERVICE_PORT: ${PORT}`));
