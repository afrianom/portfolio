import React from "react";
import './app.css';
import Navbar from "./components/NavBar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";



const App = () => {
    return(
        <div className="main">
            <Navbar/>
            <Hero/>
            <About/>
            <Portfolio/>
        </div>
    )
}

export default App