import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Collapsible from "react-collapsible";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Condition.css";
function Condition(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const handleOpen = (e) => {
    setIsOpen(true);
    e.currentTarget.style.backgroundColor = "white";
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleReject = () => {
    alert("Treatment rejected!");
    setShowButton(false);
    setIsOpen(false);
  };
  const handleAccept = () => {
    alert("Treatment accepted!");
    setShowButton(false);
    setIsOpen(false);
  };
  return (
    <React.Fragment>
      <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.treatment.proposed}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{props.treatment.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button
            className={showButton ? "button__show" : "button__hide"}
            variant="secondary"
            onClick={handleReject}
          >
            Reject Treatment
          </Button>
          <Button
            className={showButton ? "button__show" : "button__hide"}
            variant="primary"
            onClick={handleAccept}
          >
            Accept Treatment
          </Button>
        </Modal.Footer>
      </Modal>
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
            {/* <center>
            <h5>Medical Condition</h5>
          </center> */}
            <h5>Description:</h5>
            <p>{props.condition.description}</p>
            <h5>Risks:</h5>
            <p>{props.condition.risks}</p>
            <h5>Progression: </h5>
            <p>{props.condition.progression}</p>
            <p></p>
            <p></p>
          </div>

          <div
            style={{
              width: "90%",
              textOverflow: "ellipsis",
              overflowX: "scroll",
              marginLeft: "5px",
            }}
          >
            <div className="proposed__treatment" onClick={handleOpen}>
              <h5>Proposed treatment:</h5>
              <p>{props.treatment.proposed}</p>
            </div>
            <h5>Alternatives: </h5>
            <p>{props.treatment.others}</p>
          </div>
        </div>
      </Collapsible>
    </React.Fragment>
  );
}
export default Condition;
