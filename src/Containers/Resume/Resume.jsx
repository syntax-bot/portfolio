import React from "react";
import { useState } from "react";
import "./Resume.css";
import Education from "./Education";
import ProgrammingSkills from "./ProgrammingSkills";
export default function Resume() {
    const [resumeBodyText,setResumeBodyText]=useState(null);
  return (
    <div id="resumeContainer">
      <div className="resumeSideBarParent">
        <div className="resumeSideBar">
          <div className="resumeSideBarIcons">
            <span>
              <i class="bi bi-mortarboard-fill icon-color-sidebar"></i>
            </span>
            <span>
              <i class="bi bi-clock-history icon-color-sidebar"></i>
            </span>
            <span>
              <i class="bi bi-pc-display-horizontal icon-color-sidebar"></i>
            </span>
            <span>
              <i class="bi bi-terminal icon-color-sidebar"></i>
            </span>
            <span>
              <i class="bi bi-palette icon-color-sidebar"></i>
            </span>
          </div>

          <div className="resumeSideBarbtns">
            <button className="resumeSideBarbtn">Education</button>
            <button className="resumeSideBarbtn">Work History</button>
            <button className="resumeSideBarbtn">Programming Skills</button>
            <button className="resumeSideBarbtn">Projects</button>
            <button className="resumeSideBarbtn">Interests</button>
          </div>
        </div>
      </div>
      <div className="resumebodyparent">
       <ProgrammingSkills/>
      </div>
    </div>
  );
}



