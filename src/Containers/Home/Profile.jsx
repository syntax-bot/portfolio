import React from "react";
import Typical from "react-typical";
import "./Profile.css";
export default function Profile(){
  const ContactMe=document.getElementById("ContactMe");
  return (
    <div id="Home" className="profile-container">
      <div className="profile-details">
        <div className="name-icon">
          <div className="colz-icon">
            <a href="https://www.linkedin.com/in/harsh-gupta-73a992245">
              <i className="bi bi-linkedin icon-color"></i>
            </a>
            <a href="https://github.com/syntax-bot">
              <i className="bi bi-github icon-color"></i>
            </a>
            <a href="https://www.instagram.com/harsh._.gupta._/">
              <i className="bi bi-instagram icon-color"></i>
            </a>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              Hello ,I'M <strong>Harsh Gupta</strong>
            </span>
          </div>
        </div>
        <div className="profile-details-role">
          <span className="primary-text">
            <h1>
              <Typical
                loop={Infinity}
                steps={[
                  "<> Full Stack Developer </>",
                  2000,
                  "MERN Stack Dev",
                  2000,
                  "React/React Native Dev",
                  2000,
                ]}
              />
            </h1>
            <span>I build applications with Front and Back end operation.</span>
          </span>
        </div>
        <div className="profile-option">
          <button className="btn primary-btn" onClick={()=>{
            ContactMe.scrollIntoView({behavior:"smooth"});
          }}>Hire Me</button>
          <a href="#">
            <button className="btn highlighted-btn">Get Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
}
