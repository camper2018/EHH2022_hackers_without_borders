import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Condition from "./Condition";
function Conditions() {
  const [conditions, setConditions] = useState([]);

  useEffect(() => {
    // fetch data using username from localStorage;
    // if username  is undefined, render nothing
    const username = localStorage.getItem("username");
    const birthDate = localStorage.getItem("birthDate");
    console.log(username, birthDate);
    const data = [
      {
        name: "Diabetes",
        description:
          "lorumIpsumlorumIpsumlorumIpsumlorumIpsumlorumIpsumlorumIpsumlorumIpsumlorumIpsumlorumIpsum",
        risks: "retinal damage, foot gangrene",
        progression: "dfkjdlfflkdjfdfdd",
        benefits: "dsjkjfsdjfkjdskljdjlkjfklsjlksjdl",
        sideEffects: "dkldkldlkfldkd, lklfkdl, lfkldkld",
      },
      {
        name: "Congestive Heart Failure",
        description:
          "lorumIpsumlorumIpsumlorumIpsumlorumIpsumlorumIpsumlorumIpsumlorumIpsumlorumIpsumlorumIpsum",
        risks: "clotting, stroke, heart rhythm irregularities ",
        progression: "dfkjdlfflkdjfdfdd",
        benefits: "dsjkjfsdjfkjdskljdjlkjfklsjlksjdl",
        sideEffects: "dkldkldlkfldkd, lklfkdl, lfkldkld",
      },
    ];
    setConditions(data);
  }, []);
  return (
    <Container>
      <h1>Diseases & Treatments</h1>
      {conditions.map((item, i) => (
        <Condition key={i} condition={item} />
      ))}
    </Container>
  );
}
export default Conditions;
