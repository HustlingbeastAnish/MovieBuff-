import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/navbar";
import RLanding from "./Components/RLanding/rlanding";
import Alert from "./Components/Alert/alert";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [alert, setalert] = useState(null);

  const ShowAlert = () => {
    setalert(true);

    setTimeout(() => {
      setalert(null);
    }, 4000);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="mt-0">
          <Alert alert={alert} />
        </div>
        <Routes>
          <Route
            exact
            path="/"
            element={
              // <div className="mt-[-24px]">
              <RLanding category="Movies" key="Movies " ShowAlert={ShowAlert} />
              // </div>
            }
          />
          <Route
            exact
            path="/tvs"
            element={
              // <div className="mt-[-24px]">
              <RLanding category="TVs" key="Tvs" ShowAlert={ShowAlert} />
              // </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
