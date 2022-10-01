import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router} from 'react-router-dom';
import AnimatedRoutes from "./AnimatedRoutes";


const App = () => {
  return (
    <div>
      <Router className="App">
        <Navbar />
        <AnimatedRoutes />
      </Router>
    </div>
  );
}

export default App;

