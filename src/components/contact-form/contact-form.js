import React, { useState } from "react";
import {
  StyledInput,
  StyledText,
  StyledLabel,
  StyledH1,
  StyledH3,
  StyledSubmit,
  StyledForm
} from "./contact-styles";

const ContactForm = () => {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const handleOnClick = () => {
    const xhr = new XMLHttpRequest();
    const url =
      "https://u7w61rtzaa.execute-api.us-west-2.amazonaws.com/v1/contact-us";
    const data = JSON.stringify(values);
    xhr.responseType = "json";
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        return xhr.response;
      }
    };
    xhr.open("POST", url);
    xhr.send(data);
  };
  return (
    <StyledForm>
      <StyledH1>Have a question?</StyledH1>
      <StyledH3>
        Send us any questions or concerns from our contact us form, and we will
        get back to you as soon as we can!
      </StyledH3>
      <StyledLabel>Name</StyledLabel>
      <StyledInput
        type="text"
        placeholder="Name"
        name="name"
        value={values.name}
        onChange={e => setValues({ ...values, name: e.target.value })}
        required
      />
      <StyledLabel>Email Address</StyledLabel>
      <StyledInput
        type="email"
        placeholder="Email Address"
        name="email"
        value={values.email}
        onChange={e => setValues({ ...values, email: e.target.value })}
        required
      />
      <StyledLabel>Message</StyledLabel>
      <StyledText
        rows="5"
        placeholder="Message"
        name="content"
        value={values.message}
        onChange={e => setValues({ ...values, message: e.target.value })}
        required
      />
      <StyledSubmit type="button" onClick={handleOnClick}>
        Send
      </StyledSubmit>
    </StyledForm>
  );
};
export default ContactForm;
