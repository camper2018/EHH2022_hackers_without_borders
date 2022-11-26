import React from "react";
import Card from "react-bootstrap/Card";
import Collapsible from "react-collapsible";
import "./Condition.css";
function Condition(props) {
  return (
    <Collapsible
      transitionTime={400}
      open={false}
      trigger={props.condition.name}
      triggerClassName="CustomTriggerCSS"
      triggerOpenedClassName="CustomTriggerCSS--open"
      contentOuterClassName="CustomOuterContentCSS"
      contentInnerClassName="CustomInnerContentCSS"
      lazyRender
      // overflowWhenOpen="visible"
      overflowWhenOpen="scroll"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            textOverflow: "ellipsis",
            overflowX: "scroll",
            width: "100%",
            marginRight: "5px",
            borderRight: "2px solid grey",
          }}
        >
          <center>
            <h5>Description</h5>
          </center>
          <p>
            lsfjlshjdshshjkhskjhfjkhfjhfdksjhkhdsjhfjshjfkjfhdjhsjkhfjkhfjkshfjkshjkdhfsdjkhfsjkhfskjhdskjfksjdhksjhfkjsdhjdkhfkjdhfsdkjhfksjdhskjdhfskjhkjdhkjshfkjsdhfkdjshkjsdh
          </p>
          <p>
            lsfjlshjdshshjkhskjhfjkhfjhfdksjhkhdsjhfjshjfkjfhdjhsjkhfjkhfjkshfjkshjkdhfsdjkhfsjkhfskjhdskjfksjdhksjhfkjsdhjdkhfkjdhfsdkjhfksjdhskjdhfskjhkjdhkjshfkjsdhfkdjshkjsdh
          </p>
          <p>djshfsdhsjhfkjhskjffhksjd</p>
          <p>djshfsdhsjhfkjhskjffhksjd</p>
          <p>djshfsdhsjhfkjhskjffhksjd</p>
          <p>djshfsdhsjhfkjhskjffhksjd</p>
          <p>djshfsdhsjhfkjhskjffhksjd</p>
          <p>djshfsdhsjhfkjhskjffhksjd</p>
          <p>djshfsdhsjhfkjhskjffhksjd</p>
        </div>

        <div
          style={{
            width: "90%",
            textOverflow: "ellipsis",
            overflowX: "scroll",
            marginLeft: "5px",
          }}
        >
          <center>
            <h5>Treatment</h5>
          </center>
          <p>
            lsfjlshjdshshjkhskjhfjkhfjhfdksjhkhdsjhfjshjfkjfhdjhsjkhfjkhfjkshfjkshjkdhfsdjkhfsjkhfskjhdskjfksjdhksjhfkjsdhjdkhfkjdhfsdkjhfksjdhskjdhfskjhkjdhkjshfkjsdhfkdjshkjsdh
          </p>
          <p>
            lsfjlshjdshshjkhskjhfjkhfjhfdksjhkhdsjhfjshjfkjfhdjhsjkhfjkhfjkshfjkshjkdhfsdjkhfsjkhfskjhdskjfksjdhksjhfkjsdhjdkhfkjdhfsdkjhfksjdhskjdhfskjhkjdhkjshfkjsdhfkdjshkjsdh
          </p>
          <p>djshfsdhsjhfkjhskjffhksjd</p>
          <p>djshfsdhsjhfkjhskjffhksjd</p>
          <p>djshfsdhsjhfkjhskjffhksjd</p>
          <p>djshfsdhsjhfkjhskjffhksjd</p>
          <p>djshfsdhsjhfkjhskjffhksjd</p>
          <p>djshfsdhsjhfkjhskjffhksjd</p>
          <p>djshfsdhsjhfkjhskjffhksjd</p>
        </div>
        {/* </Card> */}
      </div>
    </Collapsible>
  );
}
export default Condition;
