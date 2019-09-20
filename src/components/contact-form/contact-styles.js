import styled from "styled-components";

export const StyledInput = styled.input`
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

export const StyledText = styled.textarea`
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

export const StyledLabel = styled.label`
  font-weight: bold; /* set a bold font */
  padding-bottom: 8px; /* add a padding-bottom */
`;

export const StyledH1 = styled.h1`
  font-weight: bold; /* set a bold font */
  padding-bottom: 1px; /* add a padding-bottom */
  text-align: center;
`;

export const StyledH3 = styled.p`
  padding-bottom: 20px; /* add a padding-bottom */
  text-align: center;
  line-height: 1.5;
  font-size: 24px;
  font-weight: 400;
`;

export const StyledSubmit = styled.button`
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
    border: 2px solid black; /* add a border when cursor hovered over the button */
  }
`;

export const FormContainer = styled.div`
  @media only screen and (min-width: 320px) {
    margin: 0;
  }
`;
export const StyledForm = styled.form`
  width: 60%;
  padding: 4.5rem 0px;
  margin: 0 auto; /* center a contact form */

  @media only screen and (max-device-width: 1024px) {
    width: 90%;
  }
`;
