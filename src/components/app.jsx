import React from "react";
import Navbar from "./navbar";
import Home from "./home";
import About from "./about";
import Skills from "./skills";
import Certificates from './certificates'
import Projects from "./projects";
import Contact from "./contact";
import Footer from "./footer";

function App(){
    return (
        <div>
            <Navbar/>
            <Home/>
            <About/>
            <Skills/>
            <Certificates/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default App