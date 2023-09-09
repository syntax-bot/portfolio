import React from "react";
import { useState, useRef } from "react";
import "./Resume.css";
import Education from "./Education";
import ProgrammingSkills from "./ProgrammingSkills";
import WorkHistory from "./WorkHistory";
import Projects from "./Projects";
import Interests from "./Interests";

export default function Resume() {
  const [content, setContent] = useState(Education);
  const ref = useRef("Educationbtn");
  function clear() {
    current.Educationbtn = null;
    current.Interestsbtn = null;
    current.WorkHistorybtn = null;
    current.ProgrammingSkillsbtn = null;
    current.Projectsbtn = null;
  }
  return (
    <>
      <div id="Resume" className="section_heading">
        <h4>My formal Bio Details.</h4>
      </div>
      <div className="resumeTopBarParent">
        <span className={`${current.Educationbtn}`}>
          <label htmlFor="Educationbtn">
            <i className="bi bi-mortarboard-fill icon-color-sidebar"></i>
          </label>
        </span>
        <span className={`${current.WorkHistorybtn}`}>
          <label htmlFor="WorkHistorybtn">
            <i className="bi bi-clock-history icon-color-sidebar"></i>
          </label>
        </span>
        <span className={`${current.ProgrammingSkillsbtn}`}>
          <label htmlFor="ProgrammingSkillsbtn">
            <i className="bi bi-pc-display-horizontal icon-color-sidebar"></i>
          </label>
        </span>
        <span className={`${current.Projectsbtn}`}>
          <label htmlFor="Projectsbtn">
            <i className="bi bi-terminal icon-color-sidebar"></i>
          </label>
        </span>
        <span className={`${current.Interestsbtn}`}>
          <label htmlFor="Interestsbtn">
            <i className="bi bi-palette icon-color-sidebar"></i>
          </label>
        </span>
      </div>
      <div id="resumeContainer">
        <div className="resumeSideBarParent">
          <div className="resumeSideBar">
            <div className="resumeSideBarIcons">
              <span className={`${current.Educationbtn}`}>
                <label htmlFor="Educationbtn">
                  <i className="bi bi-mortarboard-fill icon-color-sidebar"></i>
                </label>
              </span>
              <span className={`${current.WorkHistorybtn}`}>
                <label htmlFor="WorkHistorybtn">
                  <i className="bi bi-clock-history icon-color-sidebar"></i>
                </label>
              </span>
              <span className={`${current.ProgrammingSkillsbtn}`}>
                <label htmlFor="ProgrammingSkillsbtn">
                  <i className="bi bi-pc-display-horizontal icon-color-sidebar"></i>
                </label>
              </span>
              <span className={`${current.Projectsbtn}`}>
                <label htmlFor="Projectsbtn">
                  <i className="bi bi-terminal icon-color-sidebar"></i>
                </label>
              </span>
              <span className={`${current.Interestsbtn}`}>
                <label htmlFor="Interestsbtn">
                  <i className="bi bi-palette icon-color-sidebar"></i>
                </label>
              </span>
            </div>
            <div className="resumeSideBarbtns">
              <button
                id="Educationbtn"
                className={`resumeSideBarbtn ${current.Educationbtn}`}
                onClick={() => {
                  clear();
                  current.Educationbtn = "active";
                  setContent(Education);
                }}
              >
                Education
              </button>
              <button
                id="WorkHistorybtn"
                className={`resumeSideBarbtn ${current.WorkHistorybtn}`}
                onClick={(e) => {
                  clear();
                  current.WorkHistorybtn = "active";
                  setContent(WorkHistory);
                }}
              >
                Work History
              </button>
              <button
                id="ProgrammingSkillsbtn"
                className={`resumeSideBarbtn ${current.ProgrammingSkillsbtn}`}
                onClick={() => {
                  clear();
                  current.ProgrammingSkillsbtn = "active";
                  setContent(ProgrammingSkills);
                }}
              >
                Programming Skills
              </button>
              <button
                id="Projectsbtn"
                className={`resumeSideBarbtn ${current.Projectsbtn}`}
                onClick={() => {
                  clear();
                  current.Projectsbtn = "active";
                  setContent(Projects);
                }}
              >
                Projects
              </button>
              <button
                id="Interestsbtn"
                className={`resumeSideBarbtn ${current.Interestsbtn}`}
                onClick={() => {
                  clear();
                  current.Interestsbtn = "active";
                  setContent(Interests);
                }}
              >
                Interests
              </button>
            </div>
          </div>
        </div>
        <div className="resumebodyparent">{content}</div>
      </div>
    </>
  );
}

const current = {
  Educationbtn: "active",
  WorkHistorybtn: null,
  ProgrammingSkillsbtn: null,
  Projectsbtn: null,
  Interestsbtn: null,
};
