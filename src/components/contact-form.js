import React from "react";
import "./contact-form.css";

const ContactForm = ({ handleOnClick }) => {
  return (
    <form id="contactForm">
      <label>Name</label>
      <input type="text" placeholder="Name" name="name" required />
      <label>Email Address</label>
      <input type="email" placeholder="Email Address" name="email" required />
      <label>Message</label>
      <textarea rows="5" placeholder="Message" name="content" required />
      <div id="toast" />
      <button type="submit" id="submit" onclick={handleOnClick} disabled>
        Send
      </button>
    </form>
  );
};
export default ContactForm;
