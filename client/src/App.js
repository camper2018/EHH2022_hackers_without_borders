import "./App.css";
import React, { useState, useEffect } from "react";
import Navigation from "./component/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Conditions from "./component/Conditions";

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

          <Route
            path="/"
            element={
              <div>
                <Home />
              </div>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
