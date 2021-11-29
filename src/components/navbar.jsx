import React  from "react";

function Navbar(){
    return (
        <nav className="bar navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand" href="/">Rahul Sai</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#skills">Skills</a>
              </li>
              <li className="nav-item active">
                  <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item active">
                  <a className="nav-link" href="#certificates">Certificates</a>
              </li>
              <li className="nav-item active">
                  <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
    )
}

export default Navbar