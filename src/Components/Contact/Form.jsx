import React, { useState } from 'react';
import './form.scss';
import validateInfo from './validateInfo';
import emailjs from 'emailjs-com';

const Form = () => {
  // keeping track of values
  const [values, setValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  //  updating values in name attribute
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    setErrors(validateInfo(values));
  };

  // using EmailJS to send messages directly from portfolio
  function sendEmail(e) {
    e.preventDefault();
    setErrors(validateInfo(values));
    emailjs
      .sendForm(
        'service_76w6ea7',
        'template_0etamta',
        e.target,
        'user_rLzSKiFIdpb3kuMRAxUjI'
      )
      .then((res) => {
        console.log(res.text);
      })
      .catch((error) => {
        console.log(error.text);
      });

    e.target.reset();
    setIsSubmitting(true);
  }

  return (
    <div className="contact-container__form-container">
      <form className="contact-container__form" onSubmit={sendEmail}>
        <input
          className={
            errors.name
              ? 'contact-container__form-name-error'
              : 'contact-container__form-name'
          }
          type="text"
          placeholder="Name"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && (
          <div className="contact-container__error-container">
            <p className="contact-container__error-name">{errors.name}</p>
          </div>
        )}
        <input
          className={
            errors.name
              ? 'contact-container__form-email-error'
              : 'contact-container__form-email'
          }
          type="email"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && (
          <div className="contact-container__error-container">
            <p className="contact-container__error-email">{errors.email}</p>
          </div>
        )}
        <input
          className={
            errors.name
              ? 'contact-container__form-subject-error'
              : 'contact-container__form-subject'
          }
          type="text"
          placeholder="Subject"
          name="subject"
          value={values.subject}
          onChange={handleChange}
        />
        {errors.subject && (
          <div className="contact-container__error-container">
            <p className="contact-container__error-subject">{errors.subject}</p>
          </div>
        )}
        <textarea
          className={
            errors.name
              ? 'contact-container__form-message-error'
              : 'contact-container__form-message'
          }
          cols="30"
          rows="10"
          placeholder="Your Message"
          name="message"
          value={values.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && (
          <div className="contact-container__error-container">
            <p className="contact-container__error-message">{errors.message}</p>
          </div>
        )}
        {/* If validation is successful, display success message */}
        {Object.keys(errors).length === 0 && isSubmitting && (
          <div className="contact-container__success-container">
            <p className="contact-container__success-message">
              Thank you for your submission
            </p>
          </div>
        )}
        <button type="submit" className="contact-container__form-button">
          SUBMIT{' '}
        </button>
      </form>
    </div>
  );
};

export default Form;
