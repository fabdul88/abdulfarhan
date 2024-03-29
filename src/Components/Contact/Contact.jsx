import React from 'react';
import './contact.scss';
import { Form } from './Form';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="contact-container__title-container">
        <h1
          data-aos="fade-up"
          data-aos-once
          className="contact-container__title"
        >
          <span className="contact-container__title-letter">CONT</span>ACT
        </h1>
        <hr
          data-aos="fade-down"
          data-aos-once
          className="contact-container__title-hr"
        />
      </div>
      <div>
        <p
          data-aos="slide-up"
          data-aos-once
          className="contact-container__text"
        >
          HAVE SOMETHING IN MIND, A QUESTION, OR JUST WANT TO SAY HI?{' '}
          <span className="contact-container__text-highlight">Let's talk</span>
        </p>
      </div>
      <Form />
    </div>
  );
};
export { Contact };
