const mysql = require("mysql");
const con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  // password: "12345",
  password: "",
  // port: 90591,
  database: "Medical_records",
});
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  con.query(
    "CREATE DATABASE IF NOT EXISTS Medical_records",
    function (err, result) {
      if (err) throw err;
      console.log("Database created");
    }
  );
});

let birthDate1 = new Date("12/23/2010").toLocaleDateString("en-ZA"); // 2020/08/19 (year/month/day)
let birthDate2 = new Date("10/11/1965").toLocaleDateString("en-ZA"); // 2020/08/19 (year/month/day)
let birthDate3 = new Date("01/01/1975").toLocaleDateString("en-ZA"); // 2020/08/19 (year/month/day)
const users = [
  ["Maria Desouza", birthDate1],
  ["George Clooney", birthDate2],
  ["John Doe", birthDate3],
];

const conditions = [
  [
    1,
    "Diabetes Mellitus",

    "Elevated blood sugar levels caused by improper functioning of pancreas caused by genetics, infections, diet and obesity etc",

    " Prolonged high sugar levels in blood can cause multiple organ failure if not corrected",

    "Can progress to dangerous complications like  eye damage, cardiovascular disease, stroke, kidney failure and peripheral vascular disease leading to foot infections, nerve damage and more",
  ],
  [
    1,
    "Left Foot Contusion",

    "Patient presented in the office with left ankle pain from injury. Notes early bruising, pain but noticeably improved with compression socks.Pain limits her from performing daily activities.",
    "fracture, tendon or ligament tear",
    "Notes improvement in swelling but still in pain",
  ],

  [
    2,
    "Hypertension",

    "Chronically elevated blood pressure in the arteries or blood vessels",

    "High pressure can damage your arteries and heart leading to blood clots, stroke, heart attack, heart pump failure etc ",

    "Can progress to severe problems like stroke, bleeding in brain, heart failure, kidney failure",
  ],
];
const treatments = [
  [
    1,
    "Metformin, 500mg tab twice daily",
    "Glyburide, Glipizide , Insulin & diet and exercise",
    `Metformin works by helping to restore your body's proper response to the insulin you naturally produce.
    It also decreases the amount of sugar that your liver makes and that your stomach/intestines absorb.
    Take this medication by mouth as directed by your doctor, usually 1-3 times a day with meals.
    Metformin is used with a proper diet and exercise program and possibly with other medications to control high blood sugar.
    Nausea, vomiting, stomach upset, diarrhea, weakness, or a metallic taste in the mouth may occur. Symptoms of low blood sugar include sudden sweating, shaking, fast heartbeat, hunger, blurred vision, dizziness, or tingling hands/feet.
    `,
  ],
  [
    1,
    "X-ray to r/o fracture, ice and pain killer",
    "none",
    `X-rays are images that use small doses of ionized radiation to take pictures of the inside of your body called radiographs.
    Broken bones
    Dislocated joints
    Arthritis
    Abdominal pain, in some instances
    Cancer
    Tooth decay
    `,
  ],
  [
    2,
    "Chlorthalidone 25mg once a day ",
    "salt and water restriction",
    `Chlorthalidone is used to treat high blood pressure (hypertension). Lowering high blood pressure helps prevent strokes, heart attacks, and kidney problems.
    Increases urination
    Dizziness lightheadedness or stomach
    `,
  ],
];
let usersSql = `create table if not exists users(
  id int primary key auto_increment,
  name varchar(255) not null,
  birthDate varchar(50) not null

)`;
// con.query(usersSql, function (err, results, fields) {
//   if (err) console.log(err.message);
// });
let treatmentsSql = `create table if not exists treatments(
  id int primary key auto_increment,
  proposed text not null,
  others text,
  description text not null,
  user_id int not null,
  CONSTRAINT FK_treatments_users FOREIGN KEY(user_id) REFERENCES users(id)
  ON DELETE CASCADE ON UPDATE CASCADE
)`;
// con.query(treatmentsSql, function (err, results, fields) {
//   if (err) console.log(err.message);
// });
let conditionsSql = `create table if not exists conditions(
  id int primary key auto_increment,
  name varchar(255) not null,
  description text not null,
  risks text not null,
  progression text not null,
  user_id int not null,
  CONSTRAINT FK_conditions_users FOREIGN KEY(user_id) REFERENCES users(id)
  ON DELETE CASCADE ON UPDATE CASCADE
)`;
// con.query(conditionsSql, function (err, results, fields) {
//   if (err) console.log(err.message);
// });

// con.query(
//   `INSERT IGNORE INTO users ( name, birthDate) VALUES?`,
//   [users],
//   function (err, result) {
//     if (err) console.log(err);
//     console.log(result);
//   }
// );
// con.query(
//   `INSERT IGNORE INTO conditions (user_id, name, description, risks, progression) VALUES?`,
//   [conditions],
//   function (err, result) {
//     if (err) console.log(err);
//     console.log(result);
//   }
// );
// con.query(
//   `INSERT IGNORE INTO treatments (user_id, proposed, others, description) VALUES?`,
//   [treatments],
//   function (err, result) {
//     if (err) console.log(err);
//     console.log(result);
//   }
// );

module.exports = con;
