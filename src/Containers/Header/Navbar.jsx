import React from "react";
import "./Navbar.css"
export default function Navbar() {
  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg bg-dark py-3">    
        {/* bg-body-tertiary */}
        <div className="container-fluid">
            <a className="navbar-brand ms-3" href="#">
                <img  src="src\assets\logo-no-background.png" alt="logo" style={{width:175,height:35}}/>
            </a>
          <button
            className="navbar-toggler border border-white border-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span id='togglericon' className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <a className="nav-link active text-white" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link active text-white" href="#">
                  About Me
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link active text-white" href="#">
                    Resume
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link active text-white" href="#">
                  Testimonial
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link active text-white" href="#">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
