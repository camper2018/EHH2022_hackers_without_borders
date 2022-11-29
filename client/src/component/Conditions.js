import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Condition from "./Condition";
import axios from "axios";
function Conditions() {
  const [conditions, setConditions] = useState([]);
  const [treatments, setTreatments] = useState([]);
  useEffect(() => {
    // fetch data using username from localStorage;
    // if username  is undefined, render nothing
    const username = localStorage.getItem("username");
    const birthDate = localStorage.getItem("birthDate");
    async function getConditions() {
      try {
        let data1 = await axios.get(
          `http://localhost:5003/medical-records/conditions/${username}/${birthDate}`
        );
        let data2 = await axios.get(
          `http://localhost:5003/medical-records/treatments/${username}/${birthDate}`
        );

        setConditions(data1.data);
        setTreatments(data2.data);
      } catch (e) {
        console.log(e.message);
      }
    }
    getConditions();
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
