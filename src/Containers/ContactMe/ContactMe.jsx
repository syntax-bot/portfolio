import React from "react";
import "./ContactMe.css";
export default function ContactMe() {
  return (
    <div id="ContactMe">
      <div className="section_heading">
        <h4>
          Got a question or proposal, or just want to say hello? Go ahead.{" "}
          <br />I will get back to you as soon as possible.
        </h4>
      </div>
      <div className="ContactMe-area">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="userName">
            <div>
              <label htmlFor="userName">Your Name</label>
              <input
                type="text"
                name="userName"
                id="userName"
                placeholder="Enter Your Name"
              />
            </div>
          </div>
          <div className="userEmail">
            <div>
              <label htmlFor="userEmail">Email Address</label>
              <input
                type="email"
                name="userEmail"
                id="userEmail"
                placeholder="Enter Your Email Address"
              />
            </div>
          </div>
          <div className="userMessage">
            <div>
              <label htmlFor="userMessage">Your Message</label>
              <textarea
                name="userMessage"
                id="userMessage"
                placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?
"
              ></textarea>
            </div>
          </div>
          <div className="formSubmitBtn">
            <button>Shoot</button>{" "}
          </div>
        </form>
      </div>
    </div>
  );
}
