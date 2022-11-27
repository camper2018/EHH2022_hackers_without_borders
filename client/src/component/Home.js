import image from "../assets/profile-pic.png";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Login from "../component/Login";
import Navigation from "./Navigation";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  const [user, setUser] = useState(null);
  const handleSignOut = () => {
    localStorage.clear();
    setUser(null);
  };
  useEffect(() => {
    const username = localStorage.getItem("username");
    const birthDate = localStorage.getItem("birthDate");
    const address = localStorage.getItem("address");

    setUser({ username, birthDate, address });
  }, []);
  if (user) {
    return (
      <React.Fragment>
        <Navigation />
        <div style={{ marginTop: "50px" }}>
          <Button
            className="btn-lg"
            style={{ float: "right", marginRight: "30px" }}
            onClick={handleSignOut}
          >
            Sign out
          </Button>
          <center>
            <h1>Welcome To Your Health Hub</h1>
          </center>

          <div>
            <Card style={{ width: "40rem", margin: "0 auto" }}>
              <div style={{ display: "flex" }}>
                <div>
                  <Card.Img
                    variant="top"
                    src={image}
                    style={{ width: "220px", margin: "15px" }}
                  />

                  <Card.Body>
                    <div>
                      <Card.Text style={{ margin: "0 auto", padding: "10px" }}>
                        <div
                          style={{
                            width: "200px",
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <b style={{ justifyContent: "flex-start" }}>Name:</b>
                          <b>{user.username}</b>
                        </div>
                      </Card.Text>
                      <Card.Text style={{ margin: "0 auto", padding: "10px" }}>
                        <div
                          style={{
                            width: "200px",
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <b style={{ justifyContent: "flex-start" }}>DOB:</b>
                          <b>{user.birthDate}</b>
                        </div>
                      </Card.Text>
                      <Card.Text style={{ margin: "0 auto", padding: "10px" }}>
                        <div
                          style={{
                            width: "200px",
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div>
                            <b style={{ justifyContent: "flex-start" }}>
                              Address:
                            </b>
                          </div>
                          <div>
                            <div>{user?.address?.street}</div>
                            <div>
                              {user?.address?.city}, {user?.address?.country}
                            </div>
                            <div>{user?.address?.zipCode}</div>
                          </div>
                        </div>
                        <div style={{}}></div>
                      </Card.Text>

                      <Card.Text>
                        <div></div>
                      </Card.Text>
                    </div>
                  </Card.Body>
                </div>
                <div
                  style={{
                    padding: "10px",
                    margin: "auto",
                    fontSize: "20px",
                  }}
                >
                  <h2>Our Mission</h2>
                  <div style={{ marginTop: "10px" }}>
                    <p>To help you take confident decisions</p>
                    <p>To become in charge of your own health</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <Container style={{ marginTop: "100px" }}>
        <Login onLogin={setUser} />
      </Container>
    );
  }
}
export default Home;
