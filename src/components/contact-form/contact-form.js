import React from "react";
import useFormValidation from "./useFormValidation";
import "./error-display.css";
import { StyledInput, StyledText, StyledLabel, StyledH1, StyledH3, StyledSubmit, StyledForm, FormContainer } from "./contact-styles";

const ContactForm = () => {
  const INITIAL_STATE = {
    name: "",
    email: "",
    phone: "",
    message: ""
  };
  const { handleChange, values, handleOnClick, handleBlur, errors, disable, sent, touch } = useFormValidation(INITIAL_STATE);

  return (
    <FormContainer id="contact">
      {sent && (
        <h1 className="h1confirm">
          <span>&#10003; </span>Your message has been sent!
        </h1>
      )}
      <StyledForm className={sent && "formDisable"}>
        <StyledH1>Have a question?</StyledH1>
        <StyledH3>Send us any questions or concerns from our contact us form, and we will get back to you as soon as we can!</StyledH3>
        <StyledLabel htmlFor="name">Name</StyledLabel>
        <StyledInput
          type="text"
          placeholder="Name"
          id="name"
          name="name"
          onBlur={handleBlur}
          value={values.name}
          onChange={handleChange}
          className={errors.name && "error-input"}
          required
        />
        {errors.name && touch.name && <div className="error-text">{errors.name}</div>}
        <StyledLabel htmlFor="email">Email Address</StyledLabel>
        <StyledInput
          type="email"
          placeholder="Email Address"
          id="email"
          name="email"
          onBlur={handleBlur}
          value={values.email}
          onChange={handleChange}
          className={errors.email && "error-input"}
          required
        />
        {errors.email && touch.email && <div className="error-text">{errors.email}</div>}
        <StyledLabel>Phone</StyledLabel>
        <StyledInput
          type="phone"
          placeholder="Phone"
          name="phone"
          onBlur={handleBlur}
          value={values.phone}
          onChange={handleChange}
          className={errors.phone && "error-input"}
          required
        />
        {errors.phone && touch.phone && <div className="error-text">{errors.phone}</div>}
        <StyledLabel>Message</StyledLabel>
        <StyledText
          rows="5"
          placeholder="Message"
          name="message"
          onBlur={handleBlur}
          value={values.message}
          onChange={handleChange}
          className={errors.message && "error-input"}
          required
        />
        {errors.message && touch.message && <div className="error-text">{errors.message}</div>}
        <StyledSubmit type="button" onClick={handleOnClick} disabled={disable}>
          Send
        </StyledSubmit>
      </StyledForm>
    </FormContainer>
  );
};

export default ContactForm;
