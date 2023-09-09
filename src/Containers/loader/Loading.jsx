import React, { useEffect, useRef } from "react";
import "./Loading.css";
export default function Loading() {
  const myRef = useRef(null);
  useEffect(() => {
    myRef.current.scrollIntoView();
    let t = gsap.timeline();
    t.to(".child .loaderbrandanimation1", {
      xPercent:200,
      delay: 1,
      stagger: 0.2,
      duration: 1.5,
      ease: Circ.easeInOut,
      lazy: false,
    })
      .to(".child .loaderbrandanimation2", {
        xPercent: -300,
        delay: -1.3,
        stagger: 0.2,
        duration: 1.5,
        ease: Circ.easeInOut,
        lazy: false,
      })
      .to(".child .loaderbrandanimation3", {
        xPercent: -300,
        delay: -1.5,
        stagger: 0.2,
        duration: 1.5,
        ease: Circ.easeInOut,
        lazy: false,
      })
      .to("#loader", {
        height: 0,
        duration: 3,
        ease: Expo.easeInOut,
        lazy: false,
      })
      .to("#green", {
        height: "100%",
        duration: 3,
        delay: -3,
        ease: Expo.easeInOut,
        lazy: false,
      })
      .to("#main", {
        height: 0,
        delay: -3,
        duration: 3,
        ease: Expo.easeInOut,
        lazy: false,
      })
      .to(".child span", {
        fontSize: 0,
        delay: -1.5,
        duration: 1,
        ease: Expo.easeInOut,
        lazy: false,
      });
  });
  return (
    <div id="main" ref={myRef}>
      <div id="loader">
        <h1 className="reveal">
          <span className="parent">
            <span className="child">
              <span className="loaderbrandanimation1">&lt;</span>
              <span>Syntax-Bot</span>
              <span className="loaderbrandanimation2">/</span>
              <span className="loaderbrandanimation3">&gt;</span>
            </span>
          </span>
        </h1>
      </div>
      <div id="green"></div>
    </div>
  );
}
