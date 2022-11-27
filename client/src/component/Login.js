import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function Login({ onLogin }) {
  const [username, setUsername] = useState(null);
  const [birthDate, setBirthDate] = useState(null);
  const [address, setAddress] = useState({
    street: "",
    city: "",
    country: "",
    zipCode: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("username", username);
    localStorage.setItem("birthDate", birthDate);
    localStorage.setItem("address", JSON.stringify(address));
    console.log("localStorage:", localStorage);
    onLogin({ username, birthDate, address });
  };
  return (
    <Container style={{ width: "80%" }}>
      <Card>
        <h1 style={{ margin: "0 auto", marginTop: "5px" }}>Sign In</h1>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBirthDate">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                onChange={(e) => {
                  setBirthDate(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formAddress">
              <Form.Label className="mt-3">Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Street Address"
                onChange={(e) => {
                  setAddress({ ...address, street: e.target.value });
                }}
              />

              <Row>
                <Col>
                  <Form.Label className="mt-3">City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="City"
                    onChange={(e) => {
                      setAddress({ ...address, city: e.target.value });
                    }}
                  />
                </Col>
                <Col>
                  <Form.Label className="mt-3">State</Form.Label>
                  <Form.Control
                    placeholder="State"
                    type="text"
                    maxLength="2"
                    onChange={(e) => {
                      setAddress({ ...address, state: e.target.value });
                    }}
                  />
                </Col>
                <Col>
                  <Form.Label className="mt-3">Country</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Country"
                    onChange={(e) => {
                      setAddress({ ...address, country: e.target.value });
                    }}
                  />
                </Col>
                <Col>
                  <Form.Label className=" mt-3">Zip Code</Form.Label>

                  <Form.Control
                    placeholder="ZIP"
                    type="text"
                    onChange={(e) => {
                      setAddress({ ...address, zipCode: e.target.value });
                    }}
                  />
                </Col>
              </Row>
            </Form.Group>
            <Button variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
export default Login;
