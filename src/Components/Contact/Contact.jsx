import React from "react";
import emailjs from "emailjs-com";
import "./contact.scss";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function Contact() {
  // using EmailJS to send messages directly from portfolio
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_76w6ea7",
        "template_0etamta",
        e.target,
        "user_rLzSKiFIdpb3kuMRAxUjI"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  }

  return (
    <div id="contact" className="contact-container">
      <div className="contact-container__title-container">
        <h1 data-aos="fade-up" className="contact-container__title">
          <span className="contact-container__title-letter">C</span>ONTACT
        </h1>
        <hr data-aos="fade-down" className="contact-container__title-hr" />
      </div>
      <div>
        <p data-aos="slide-down" className="contact-container__text">
          Like what you see ?{" "}
          <span
            data-aos="fade-up"
            duration="3000"
            className="contact-container__text-highlight"
          >
            Let's talk
          </span>{" "}
          about your next project
        </p>
      </div>
      <div className="contact-container__form-container">
        <form
          className="contact-container__form"
          action=""
          onSubmit={sendEmail}
        >
          <input
            data-aos="flip-up"
            className="contact-container__form-name"
            type="text"
            placeholder="Name"
            name="name"
            required
          />
          <input
            data-aos="flip-down"
            className="contact-container__form-email"
            type="text"
            placeholder="Email"
            name="email"
            required
          />
          <input
            data-aos="flip-up"
            className="contact-container__form-subject"
            type="text"
            placeholder="Subject"
            name="subject"
            required
          />
          <textarea
            data-aos="flip-down"
            className="contact-container__form-message"
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
            name="message"
            required
          ></textarea>
          <button
            data-aos="zoom-in"
            duration="4000"
            className="contact-container__form-button"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}
