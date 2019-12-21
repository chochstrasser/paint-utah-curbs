// __tests__/contact-form-test.js
import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import Form from "../contact-form";

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it("Contact form changes the text after click", () => {
  const { getByText, queryByText, getByLabelText } = render(<Form />);

  // find first form input
  expect(queryByText(/name/i)).toBeTruthy();
  fireEvent.click(getByLabelText(/name/i));

  // fill out the form - partially
  fireEvent.change(getByLabelText(/name/i), { target: { value: "chuck norris" } });
  fireEvent.change(getByLabelText(/email/i), { target: { value: "chuck.norris@gmail.com" } });

  // submit form
  fireEvent.click(getByText(/^send$/i));

  // expect to be disabled submit form
  expect(getByText(/^send$/i).hasAttribute("disabled")).toBeTruthy();
});
