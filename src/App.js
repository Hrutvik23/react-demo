import "./App.css";
import About from "./Components/About";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const ShowAlert = (message, type) => {
    setAlert({
      msg: message,
      types: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = "white";
      ShowAlert("Light Mode has been enabled", "success");
    }
    else {
      setMode('dark')
      document.body.style.backgroundColor = "black";
      ShowAlert("Dark Mode has been enabled", "warning");
    }
  }
  return (
    <>
      {/* <Router> */}

        <Navbar title="HB's Text Management" mode={mode} toggleMode={toggleMode} About="About"/>
        <Alert alerts={alert} />
        {/* <div className="container">
          <Routes>
            <Route path="/about" element={
             <About  />} />
            <Route path="/" element={
              <TextForm heading="Enter the Text to analyze" mode={mode} ShowAlert={ShowAlert} />} />
          </Routes>
        </div>
      
      </Router> */}
      <TextForm heading="Enter the Text to analyze" mode={mode} ShowAlert={ShowAlert} />

    </>
  );
}
export default App;
