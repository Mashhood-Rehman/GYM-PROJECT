import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkoutSession from "./components/WorkoutSession";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import BMICalculator from "./components/BMICalculator";
import Footer from "./components/Footer";
import "./App.css";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Hero />
        <WorkoutSession />
        <Gallery />
        <Pricing />
        <BMICalculator />
        <Contact />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
