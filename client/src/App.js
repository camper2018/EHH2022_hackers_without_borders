// import logo from "./logo.svg";
import "./App.css";
import image from "./assets/profile-pic.png";
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import Login from "./component/Login";
import Navigation from "./component/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Conditions from "./component/Conditions";
// function App() {
//   const [user, setUser] = useState(null);
//   const handleSignOut = () => {
//     localStorage.clear();
//     setUser(null);
//   };
//   useEffect(() => {
//     const username = localStorage.getItem("username");
//     const birthDate = localStorage.getItem("birthDate");
//     const address = localStorage.getItem("address");
//     setUser({ username, birthDate, address });
//   }, []);
//   if (user) {
//     return (
//       <>
//         <Navigation />
//         <div style={{ marginTop: "50px" }}>
//           <Button
//             className="btn-lg"
//             style={{ float: "right", marginRight: "30px" }}
//             onClick={handleSignOut}
//           >
//             Sign out
//           </Button>
//           <center>
//             <h1>Welcome To Your Health Hub</h1>
//           </center>

//           <div>
//             <Card style={{ width: "40rem", margin: "0 auto" }}>
//               {/* <Card.Title>Your Profile</Card.Title> */}
//               <div style={{ display: "flex" }}>
//                 <div>
//                   <Card.Img
//                     variant="top"
//                     src={image}
//                     style={{ width: "220px", margin: "15px" }}
//                   />

//                   <Card.Body>
//                     <div>
//                       <Card.Text style={{ margin: "0 auto", padding: "10px" }}>
//                         <div
//                           style={{
//                             width: "200px",
//                             display: "flex",
//                             justifyContent: "space-around",
//                           }}
//                         >
//                           <b style={{ justifyContent: "flex-start" }}>Name:</b>
//                           <em>Mr. xyz</em>
//                         </div>
//                       </Card.Text>
//                       <Card.Text style={{ margin: "0 auto", padding: "10px" }}>
//                         <div
//                           style={{
//                             width: "200px",
//                             display: "flex",
//                             justifyContent: "space-around",
//                           }}
//                         >
//                           <b style={{ justifyContent: "flex-start" }}>DOB:</b>
//                           <em>01/01/2001</em>
//                         </div>
//                       </Card.Text>
//                       <Card.Text style={{ margin: "0 auto", padding: "10px" }}>
//                         <div
//                           style={{
//                             width: "200px",
//                             display: "flex",
//                             justifyContent: "space-around",
//                           }}
//                         >
//                           <b style={{ justifyContent: "flex-start" }}>
//                             Address:
//                           </b>
//                           <div>
//                             <div> Vlkova 5</div>
//                             <div>Praha 5</div>
//                             <div>150 00</div>
//                           </div>
//                         </div>
//                         <div style={{}}></div>
//                       </Card.Text>

//                       <Card.Text>
//                         <div></div>
//                       </Card.Text>
//                     </div>
//                   </Card.Body>
//                 </div>
//                 <div
//                   style={{
//                     padding: "10px",
//                     margin: "auto",
//                     fontSize: "20px",
//                   }}
//                 >
//                   <h2>Our Mission</h2>
//                   <div style={{ marginTop: "10px" }}>
//                     <p>To help you take confident decisions</p>
//                     <p>To become in charge of your own health</p>
//                   </div>
//                 </div>
//               </div>
//             </Card>
//           </div>
//         </div>
//       </>
//     );
//   } else {
//     return (
//       <Container style={{ marginTop: "100px" }}>
//         <Login onLogin={setUser} />
//       </Container>
//     );
//   }
// }
function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const username = localStorage.getItem("username");
    const birthDate = localStorage.getItem("birthDate");
    const address = localStorage.getItem("address");
    setUser({ username, birthDate, address });
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/diseases"
            element={
              <div>
                <Navigation />, <Conditions />
              </div>
            }
          ></Route>
          {/* {user ? ( */}
          <Route
            path="/"
            element={
              <div>
                {/* <Navigation /> */}
                <Home />
              </div>
            }
          ></Route>
          {/* ) : (
            <Route path="/" element={<Home />}></Route>
          )} */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
