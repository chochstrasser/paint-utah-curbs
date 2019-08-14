import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */
  border: none; /* Delete border */
  border-bottom: 2px solid black; /* Add a bottom border */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical; /* Allow the user to vertically resize the textarea (not horizontally) */
  font-size: 15px; /* Set a font size */
  ::placeholder {
    font-size: 15px; /* add a font size of placeholders*/
  }
`;

const StyledText = styled.textarea`
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */
  border: none; /* Delete border */
  border-bottom: 2px solid black; /* Add a bottom border */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical; /* Allow the user to vertically resize the textarea (not horizontally) */
  font-size: 15px; /* Set a font size */
`;

const StyledLabel = styled.label`
  font-weight: bold; /* set a bold font */
  padding-bottom: 8px; /* add a padding-bottom */
`;
const StyledSubmit = styled.button`
  background-color: black; /* add a black background of button */
  color: white; /* add a white font on a button */
  padding: 12px 20px; /* set a padding */
  border: none; /* Remove border */
  border-radius: 8 px; /*set a border radius */
  float: right; /* align a button to the right */
  cursor: pointer; /* change a cursor look */
  text-transform: uppercase;
  :hover {
    background-color: white; /* change a button background when cursor hovered over the button */
    color: black; /* change a font color when cursor hovered over the button */
    border: 2px solid black; /*add a border when cursor hovered over the button */
  }
`;

const StyledForm = styled.form`
  width: 50%;
  font-family: Helvetica, sans-serif, Arial; /* set a font family */
  margin: 0 auto; /*center a contact form */
`;

const ContactForm = ({ handleOnClick }) => {
  return (
    <StyledForm id="contactForm">
      <StyledLabel>Name</StyledLabel>
      <StyledInput type="text" placeholder="Name" name="name" required />
      <StyledLabel>Email Address</StyledLabel>
      <StyledInput
        type="email"
        placeholder="Email Address"
        name="email"
        required
      />
      <StyledLabel>Message</StyledLabel>
      <StyledText rows="5" placeholder="Message" name="content" required />
      <div id="toast" />
      <StyledSubmit type="submit" id="submit" onclick={handleOnClick} disabled>
        Send
      </StyledSubmit>
    </StyledForm>
  );
};
export default ContactForm;
