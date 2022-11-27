const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
app.use(cors());
// Configure the bodyParser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
// app.get("*", (req, res) => {
//   res.status(200).json({
//     msg: "Catch All. Not running in production or staging?",
//   });
// });
// ************************************//
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  port: 3306,
  database: "Treatments",
});

app.get("api/getDataToPatient", (req, res) => {
  var username = req.query.username;
  var birthdate = req.query.birthdate;
  console.log("username:", username);
  console.log("birthdate", birthdate);
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
      console.log("result: ", result);
      if (err) throw err; //console.log(result);
      // con.query(query2, function (err, result2, fields) {
      // if (err) throw err;
      // console.log(result2);
      // resultString = "ongoing:{"
      //   .concat(JSON.stringify(result))
      //   .concat("}, potential:{")
      //   .concat(JSON.stringify(result2))
      //   .concat("}");
      // res.send(resultString);

      resultString = "[ongoing:{"
        .concat(result)
        .concat("}, potential:{")
        .concat(result2)
        .concat("}]");
      res.send(resultString);
      // });
    });
  });
});

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

app.get("/getTreatments", (req, res) => {
  con.connect(function (err) {
    con.query("SELECT * FROM treatmentsFE1", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      res.send(result);
    });
  });
});

//CREATE Medical Statement and insert it (move this to somewhere else)

/*
 *
 * Create Medical statement and insert
 * 1) reasoncode
 * 2) patientID
 * upload (POST) it to FIHR
 * then GET Medical Statements
 *
 * Create Condition statement and insert
 * 1) condition
 * 2) patientID
 * upload (POST) it to FIHR
 * then GET Condition Statements
 *
 * Then "join"
 * */
//************************************* */

// Set our backend port to be either an environment variable or port 5000
const PORT = process.env.PORT || 5001;

// Configure our server to listen on the port defined by our port variable
app.listen(PORT, () => console.log(`BACK_END_SERVICE_PORT: ${PORT}`));
