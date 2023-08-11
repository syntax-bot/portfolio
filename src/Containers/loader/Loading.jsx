import React from "react";
import "./Loading.css";
export default function Loading() {
  return (
    <div id="main">
      <div id="loader">
        <h1 className="reveal">
          <span className="parent">
            <span className="child">
              <span className="loaderbrandanimation1">&lt;</span>
              <span>Syntax-Bot</span>
              <span className="loaderbrandanimation2">/</span>
              <span className="loaderbrandanimation2">&gt;</span>
            </span>
          </span>
        </h1>
      </div>
      <div id="green"></div>
    </div>
  );
}

export function LoadingFunc() {
  let t = gsap.timeline();

  t.from(".child .loaderbrandanimation2", {
    x: 200,
    delay: 1,
    stagger: 0.2,
    duration: 1.5,
    ease: Circ.easeInOut,lazy:false,
    
  })
    .from(".child .loaderbrandanimation1", {
      x: -200,
      delay: -2,
      stagger: 0.2,
      duration: 1.5,
      ease: Circ.easeInOut,lazy:false,
      
    })
    .to("#loader", {
      height: 0,
      duration: 3,
      ease: Expo.easeInOut,lazy:false,
      
    })
    .to("#green", {
      height: "100%",
      duration: 3,
      delay: -3,
      ease: Expo.easeInOut,lazy:false,
      
    })
    .to("#main", {
      height: 0,
      delay: -3,
      duration: 3,
      ease: Expo.easeInOut,lazy:false,
      
    })
    .to(".child span",{
      fontSize:0,
      delay:-1.5,
      duration: 1,
      ease: Expo.easeInOut,lazy:false,
      

    });
}
