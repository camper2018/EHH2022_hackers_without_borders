import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Condition from "./Condition";
function Conditions() {
  const [conditions, setConditions] = useState([]);
  const [treatments, setTreatments] = useState([]);
  useEffect(() => {
    // fetch data using username from localStorage;
    // if username  is undefined, render nothing
    const username = localStorage.getItem("username");
    const birthDate = localStorage.getItem("birthDate");
    // try {
    //   fetch(`/getDataToPatient?username=${username}&birthdate=${birthDate}`)
    //     .then((res) => {
    //       console.log("res+++++", res);
    //       return res.json();
    //     })
    //     .then((data) => console.log("Data:", data));
    // } catch (e) {
    //   console.log(e.message);
    // }
    const data = [
      {
        name: "Diabetes Mellitus",
        description:
          "Elevated blood sugar levels caused by improper functioning of pancreas caused by genetics, infections, diet and obesity etc",
        risks:
          " Prolonged high sugar levels in blood can cause multiple organ failure if not corrected",
        progression:
          "Can progress to dangerous complications like  eye damage, cardiovascular disease, stroke, kidney failure and peripheral vascular disease leading to foot infections, nerve damage and more",
      },
      {
        name: "Left Foot Contusion",
        description:
          "Patient presented in the office with left ankle pain from injury. Notes early bruising, pain but noticeably improved with compression socks.Pain limits her from performing daily activities.",
        risks: "fracture, tendon or ligament tear",
        progression: "Notes improvement in swelling but still in pain",
      },

      {
        name: "Hypertension",
        description:
          "Chronically elevated blood pressure in the arteries or blood vessels",
        risks:
          "High pressure can damage your arteries and heart leading to blood clots, stroke, heart attack, heart pump failure etc ",
        progression:
          "Can progress to severe problems like stroke, bleeding in brain, heart failure, kidney failure",
      },
      {
        name: "Diabetes Mellitus",
        description:
          "Patient came in the office with complain of urinary frequency, feeling tired, hungry and thirsty most of the time and weight gain. Recent HbA1c level was higher than normal.",
        risks:
          "Family history of uncontrolled diabetes warns urgent and proper management to prevent complications.",
        progression:
          "Uncontrolled newly diagnosed diabetes with very high levels of hbA1c can progress to multiple organ damage and need active management.",
      },
    ];
    const data2 = [
      {
        proposed: "Metformin, 500mg tab twice daily",
        others: "Glyburide, Glipizide , Insulin & diet and exercise",
        description: `Metformin works by helping to restore your body's proper response to the insulin you naturally produce.
        It also decreases the amount of sugar that your liver makes and that your stomach/intestines absorb.
        Take this medication by mouth as directed by your doctor, usually 1-3 times a day with meals.
        Metformin is used with a proper diet and exercise program and possibly with other medications to control high blood sugar.
        Nausea, vomiting, stomach upset, diarrhea, weakness, or a metallic taste in the mouth may occur. Symptoms of low blood sugar include sudden sweating, shaking, fast heartbeat, hunger, blurred vision, dizziness, or tingling hands/feet.
        `,
      },
      {
        proposed: "X-ray to r/o fracture, ice and pain killer",
        others: "none",
        description: `X-rays are images that use small doses of ionized radiation to take pictures of the inside of your body called radiographs.
        Broken bones
        Dislocated joints
        Arthritis
        Abdominal pain, in some instances
        Cancer
        Tooth decay
        `,
      },
      {
        proposed: "Chlorthalidone 25mg once a day ",
        others: "salt and water restriction",
        description: `Chlorthalidone is used to treat high blood pressure (hypertension). Lowering high blood pressure helps prevent strokes, heart attacks, and kidney problems.
        Increases urination
        Dizziness lightheadedness or stomach
        `,
      },
      {
        proposed: "Glyburide 2.5mg twice daily",
        others: " Metformin, Glipizide , Insulin & diet and exercise",
        others: `Glyburide is used with a proper diet and exercise program to control high blood sugar in people with type 2 diabetes. It lowers blood sugar by causing the release of your body's natural insulin.
        Take this medication by mouth with breakfast or the first main meal of the day as directed by your doctor, usually once daily.
        Nausea, heartburn, stomach fullness, and weight gain may occur. This medication can cause low blood sugar (hypoglycemia). This may occur if you do not consume enough calories from food or if you do unusually heavy exercise. Symptoms of low blood sugar include sudden sweating, shaking, fast heartbeat, hunger, blurred vision, dizziness, or tingling hands/feet.
        `,
      },
    ];
    setConditions(data);
    setTreatments(data2);
  }, []);
  return (
    <Container>
      <h1>Diseases & Treatments</h1>
      {conditions.map((item, i) => (
        <Condition key={i} condition={item} treatment={treatments[i]} />
      ))}
    </Container>
  );
}
export default Conditions;
