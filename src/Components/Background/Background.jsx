import React from "react";
import "./background.scss";

export default function Background() {
  return (
    <div className="stars-container">
      <section className="stars-container__wrapper">
        <div className="stars-container__stars"></div>
        <div className="stars-container__stars-two"></div>
        <div className="stars-container__stars-three"></div>
        <div className="stars-container__title container">
          <span className="stars-container__first-name stars-container__span">
            Abdul
          </span>
          <span className="stars-container__last-name stars-container__span">
            Farhan
          </span>
          <span className="stars-container__career stars-container__span">
            FULL STACK WEB DEVELOPER
          </span>
        </div>
      </section>
    </div>
  );
}
