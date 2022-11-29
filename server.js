const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const axios = require("axios");
const router = express.Router();
app.use("/", router);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
router.use(cors());
app.use(express.static(path.join(__dirname, "public")));
const PORT = process.env.PORT || 5003;
// Configure our server to listen on the port defined by our port variable
app.listen(PORT, () => console.log(`BACK_END_SERVICE_PORT: ${PORT}`));
var mysql = require("mysql");
const con = require("./database");
// API end points
router.get("/medical-records/conditions/:name/:birthDate", (req, res) => {
  var nameSql = `Select * from conditions where conditions.user_id =(Select id from users where users.name="${req.params.name}")`;
  con.query(nameSql, function (err, results) {
    if (err) console.log(err);
    console.log("conditions: ", results);
    res.json(results);
  });
});
router.get("/medical-records/treatments/:name/:birthDate", (req, res) => {
  var nameSql = `Select * from treatments where treatments.user_id =(Select id from users where users.name="${req.params.name}")`;
  con.query(nameSql, function (err, results) {
    if (err) console.log(err);
    console.log("treatments: ", results);
    res.json(results);
  });
});
con.end(function (err) {
  if (err) return console.log(err.message);
});

/*
 * The data source for our Frontend is this database, which can be connected with FHIR
 * */
// var con = mysql.createConnection({
//   host: "127.0.0.1",
//   user: "root",
//   // password: "12345",
//   password: "cisco123",
//   // port: 90591,
//   database: "Treatments",
// });
// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("CREATE DATABASE IF NOT EXISTS Treatments", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });

// let birthDate1 = new Date("12/23/2010").toLocaleDateString("en-ZA"); // 2020/08/19 (year/month/day)
// let birthDate2 = new Date("10/11/1965").toLocaleDateString("en-ZA"); // 2020/08/19 (year/month/day)
// let birthDate3 = new Date("01/01/1975").toLocaleDateString("en-ZA"); // 2020/08/19 (year/month/day)
// const users = [
//   ["Maria Desouza", birthDate1],
//   ["George Clooney", birthDate2],
//   ["John Doe", birthDate3],
// ];
// const conditions = [
//   [
//     1,
//     "Diabetes Mellitus",

//     "Elevated blood sugar levels caused by improper functioning of pancreas caused by genetics, infections, diet and obesity etc",

//     " Prolonged high sugar levels in blood can cause multiple organ failure if not corrected",

//     "Can progress to dangerous complications like  eye damage, cardiovascular disease, stroke, kidney failure and peripheral vascular disease leading to foot infections, nerve damage and more",
//   ],
//   [
//     1,
//     "Left Foot Contusion",

//     "Patient presented in the office with left ankle pain from injury. Notes early bruising, pain but noticeably improved with compression socks.Pain limits her from performing daily activities.",
//     "fracture, tendon or ligament tear",
//     "Notes improvement in swelling but still in pain",
//   ],

//   [
//     2,
//     "Hypertension",

//     "Chronically elevated blood pressure in the arteries or blood vessels",

//     "High pressure can damage your arteries and heart leading to blood clots, stroke, heart attack, heart pump failure etc ",

//     "Can progress to severe problems like stroke, bleeding in brain, heart failure, kidney failure",
//   ],
// ];
// const treatments = [
//   [
//     1,
//     "Metformin, 500mg tab twice daily",
//     "Glyburide, Glipizide , Insulin & diet and exercise",
//     `Metformin works by helping to restore your body's proper response to the insulin you naturally produce.
//     It also decreases the amount of sugar that your liver makes and that your stomach/intestines absorb.
//     Take this medication by mouth as directed by your doctor, usually 1-3 times a day with meals.
//     Metformin is used with a proper diet and exercise program and possibly with other medications to control high blood sugar.
//     Nausea, vomiting, stomach upset, diarrhea, weakness, or a metallic taste in the mouth may occur. Symptoms of low blood sugar include sudden sweating, shaking, fast heartbeat, hunger, blurred vision, dizziness, or tingling hands/feet.
//     `,
//   ],
//   [
//     1,
//     "X-ray to r/o fracture, ice and pain killer",
//     "none",
//     `X-rays are images that use small doses of ionized radiation to take pictures of the inside of your body called radiographs.
//     Broken bones
//     Dislocated joints
//     Arthritis
//     Abdominal pain, in some instances
//     Cancer
//     Tooth decay
//     `,
//   ],
//   [
//     2,
//     "Chlorthalidone 25mg once a day ",
//     "salt and water restriction",
//     `Chlorthalidone is used to treat high blood pressure (hypertension). Lowering high blood pressure helps prevent strokes, heart attacks, and kidney problems.
//     Increases urination
//     Dizziness lightheadedness or stomach
//     `,
//   ],
// ];
// let usersSql = `create table if not exists users(
//   id int primary key auto_increment,
//   name varchar(255) not null,
//   birthDate date not null

// )`;
// con.query(usersSql, function (err, results, fields) {
//   if (err) console.log(err.message);
// });
// let treatmentsSql = `create table if not exists treatments(
//   id int primary key auto_increment,
//   proposed text not null,
//   others text,
//   description text not null,
//   user_id int not null,
//   CONSTRAINT FK_treatments_users FOREIGN KEY(user_id) REFERENCES users(id)
//   ON DELETE CASCADE ON UPDATE CASCADE
// )`;
// con.query(treatmentsSql, function (err, results, fields) {
//   if (err) console.log(err.message);
// });
// let conditionsSql = `create table if not exists conditions(
//   id int primary key auto_increment,
//   name varchar(255) not null,
//   description text not null,
//   risks text not null,
//   progression text not null,
//   user_id int not null,
//   CONSTRAINT FK_conditions_users FOREIGN KEY(user_id) REFERENCES users(id)
//   ON DELETE CASCADE ON UPDATE CASCADE
// )`;
// con.query(conditionsSql, function (err, results, fields) {
//   if (err) console.log(err.message);
// });

// con.query(
//   `INSERT INTO users ( name, birthDate) VALUES?`,
//   [users],
//   function (err, result) {
//     if (err) console.log(err);
//     console.log(result);
//   }
// );
// con.query(
//   `INSERT INTO conditions (user_id, name, description, risks, progression) VALUES?`,
//   [conditions],
//   function (err, result) {
//     if (err) console.log(err);
//     console.log(result);
//   }
// );
// con.query(
//   `INSERT INTO treatments (user_id, proposed, others, description) VALUES?`,
//   [treatments],
//   function (err, result) {
//     if (err) console.log(err);
//     console.log(result);
//   }
// );

// //--> out application works based on a mysql database, which is synchronized with the FIHR database using /fetchDataFromFIHR //--> possible treatments for each condition are displayed based on past treatments to this condition stored in FIHR //This fetches the medical statements from FHIR and updates the Databases accordingly

//  * We found sources in the internet to display details to a condition and to a medication (e.g. ); however, this isnt included here for time reasons
//  *
//  * We have 4 tables - patients1, medicalConditions1, treatmentsFE1 and PatientConditionsTreatment running on mysql. The sql files with
//  * sample data are also in the github repo
//  * */
// router.get("/fetchDataFromFIHR", (req, res) => {
//   axios
//     .get(
//       "https://fhir.y80lwhsyg23r.static-test-account.isccloud.io/MedicationStatement",
//       {
//         headers: {
//           "x-api-key": "4rSnTSw47g4cNQ22XpAFf1wNO9mt7N8e67DFjFH1",
//         },
//       }
//     )
//     .then((resp) => {
//       console.log("resp: )))))", resp.data);
//       let result = JSON.stringify(resp.data);
//       medications = result.split('"resourceType":"MedicationStatement"');
//       medications.forEach(function (item, index) {
//         if (item.includes("Diabetes5")) {
//           try {
//             let condition = item
//               .split('reasonCode"')[1]
//               .split("display")[1]
//               .split("}")[0]
//               .replace(":", "");
//             let treatment = item
//               .split('medicationCodeableConcept"')[1]
//               .split("display")[1]
//               .split("}")[0]
//               .replace(":", "");
//             let patient = item
//               .split('subject"')[1]
//               .split("display")[1]
//               .split("}")[0]
//               .replace(": ", "");
//             console.log(condition);
//             console.log(treatment);
//             console.log(patient);
//             query1 = "INSERT INTO patients1 (name) VALUES ('" + patient + "')";
//             query2 =
//               "INSERT INTO medicalConditions1 (name) VALUES  ('" +
//               condition +
//               "')";
//             con.connect(function (err) {
//               con.query(query1, function (err, result, fields) {
//                 if (err) throw err;
//               });
//               con.query(query2, function (err, result, fields) {
//                 if (err) throw err;
//                 query3 =
//                   "INSERT INTO treatmentsFE1 (name,medicalCond_ition) VALUES ('" +
//                   treatment +
//                   "','" +
//                   condition +
//                   "')";
//                 con.query(query3, function (err, result, fields) {
//                   if (err) throw err;
//                   console.log("fetching success");
//                   //this is not a treatment, but just a potential treatment! --> getting potential treatments from treatments1
//                   //  query4 = "INSERT INTO PatientConditionsTreatment (patient, cond_ition, treatment) VALUES ('"+patient+"', '"+condition+"', '"+medication+"');";
//                 });
//               });
//             });
//           } catch (Exception) {
//             console.log(Exception);
//           }
//         }
//       });
//     });
// });
//when a patient accepts a treatment, this is updated into FIHR -> the snomed code is dummy for now, because our application only uses the "display".
//so this endpoint is called, when a patient accepts a treatment
// router.post("/sendDataToFIHR", (req, res) => {
//   var patient = req.query.patient;
//   var condition = req.query.condition;
//   var treatment = req.query.treatment;
//   let JSONString =
//     `{
//   "resourceType": "MedicationStatement",
//   "text": {
//     "status": "generated",
//     "div": " "
// },
//   "status": "active",
//   "medicationCodeableConcept": {
//     "coding": [
//       {
//         "system": "http://snomed.info/sct",
//         "code": "39543009",
//         "display": "` +
//     treatment +
//     `"
//       }
//     ]
//   },
//   "subject": {
//     "reference": "Patient/1",
//      "display": "` +
//     patient +
//     `"
//   },
//   "reasonCode": [
//     {
//       "coding": [
//         {
//           "system": "http://snomed.info/sct",
//           "code": "73211009",
//           "display": "` +
//     condition +
//     `"
//         }
//       ]
//     }
//   ]
// }
//  `;
//   console.log(JSONString[106] + JSONString[107] + JSONString[108]);
//   axios
//     .post(
//       "https://fhir.y80lwhsyg23r.static-test-account.isccloud.io/MedicationStatement",
//       JSON.parse(JSONString),
//       {
//         headers: {
//           "Content-Type": "application/fhir+json",
//           "x-api-key": "4rSnTSw47g4cNQ22XpAFf1wNO9mt7N8e67DFjFH1",
//         },
//       }
//     )
//     .then((resp) => {
//       console.log(resp);
//     });
// });
/**
 * This Endpoint takes a patients name as input and returns:
 * - all medical conditions associated with the patient
 * - all treatments associated with the patient with all related information
 *
 * */

// router.get("/getDataToPatient", (req, res) => {
//   var username = req.query.username;
//   console.log("username*********", username);
//   console.log("birthDate", req.query.birthdate);
//   res.json({ message: "Hello" });
//   var birthdate = req.query.birthdate;
// if (username === undefined) {
//   query =
//     "SELECT PatientConditionsTreatment.patient, PatientConditionsTreatment.cond_ition, treatmentsFE1.* FROM patients1 JOIN PatientConditionsTreatment JOIN treatmentsFE1 WHERE patients1.name = PatientConditionsTreatment.patient AND PatientConditionsTreatment.treatment = treatmentsFE1.name";
//   query2 =
//     "SELECT PatientConditionsTreatment.patient, PatientConditionsTreatment.cond_ition, treatmentsFE1.* FROM treatmentsFE1 JOIN PatientConditionsTreatment WHERE treatmentsFE1.medicalCond_ition = PatientConditionsTreatment.cond_ition";
// } else {
//   query =
//     "SELECT PatientConditionsTreatment.patient, PatientConditionsTreatment.cond_ition, treatmentsFE1.* FROM patients1 JOIN PatientConditionsTreatment JOIN treatmentsFE1 WHERE patients1.name = PatientConditionsTreatment.patient AND PatientConditionsTreatment.treatment = treatmentsFE1.name AND patients1.name='" +
//     username +
//     "'";
//   query2 =
//     "SELECT PatientConditionsTreatment.patient, PatientConditionsTreatment.cond_ition, treatmentsFE1.* FROM treatmentsFE1 JOIN PatientConditionsTreatment WHERE treatmentsFE1.medicalCond_ition = PatientConditionsTreatment.cond_ition AND patients1.name='" +
//     username +
//     "'";
// }
// con.connect(function (err) {
//   con.query(query, function (err, result, fields) {
//     if (err) throw err;
//     //console.log(result);
//     con.query(query2, function (err, result2, fields) {
//       if (err) throw err;
//       console.log(result2);
//       resultString = "[ongoing:{"
//         .concat(result)
//         .concat("}, potential:{")
//         .concat(result2)
//         .concat("}]");
//       res.send(resultString);
//     });
//   });
// });
// });
/* This endpoint returns all medical conditions
 * */
// router.get("/getMedicalConditions", (req, res) => {
//   con.connect(function (err) {
//     con.query(
//       "SELECT * FROM medicalConditions1",
//       function (err, result, fields) {
//         console.log("result:", result);
//         if (err) throw err;
//         console.log(result);
//         res.json(result);
//       }
//     );
//   });
// });
/* This endpoint returns all treatments
 * */
// router.get("/getTreatments", (req, res) => {
//   con.connect(function (err) {
//     con.query("SELECT * FROM treatmentsFE1", function (err, result, fields) {
//       if (err) throw err;
//       console.log(result);
//       res.send(result);
//     });
//   });
// });
// Set our backend port to be either an environment variable or port 5000
// const PORT = process.env.PORT || 5003;
// // Configure our server to listen on the port defined by our port variable
// app.listen(PORT, () => console.log(`BACK_END_SERVICE_PORT: ${PORT}`));
