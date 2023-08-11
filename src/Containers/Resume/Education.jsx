import React from "react";
import "./Education.css";
export default function Education() {
  return (
    <>
      <div id="education">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="main-timeline">
                <div class="timeline">
                  <a href="#" class="timeline-content">
                    <div class="timeline-icon">
                      <img src="src\assets\jnu-new-delhi-logo.png" alt="JNU logo" />
                    </div>
                    <h3 class="title">Graduation</h3>
                    <p class="description">
                      <h6>2021-Present(~2025)</h6>
                      <p>
                        <h5>Jawaharlal Nehru University,New Delhi</h5>
                        <p>
                          B.Tech in Electronics and Communication Engineering
                        </p>
                      </p>
                    </p>
                  </a>
                </div>
                <div class="timeline">
                  <a href="#" class="timeline-content">
                    <div class="timeline-icon">
                      <img src="src\assets\kvslogo.jpg" alt="k.v.s. logo" />
                    </div>
                    <h3 class="title">High School</h3>
                    <p class="description">
                      <h6>(2016-2020)</h6>
                      <p>
                        <h5>Kendriya Vidyalaya sangathan IFFCO, Bareilly.</h5>
                        An Autonomous Body Under Ministry Of Education,
                        Government Of India.
                      </p>
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}