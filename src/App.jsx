import React from "react";
import './app.css';
import Navbar from "./components/NavBar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";



const App = () => {
    return(
        <div className="main">
            <Navbar/>
            <Hero/>
            <About/>
            <Portfolio/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default App