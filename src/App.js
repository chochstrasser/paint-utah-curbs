import React from "react";
import ContactForm from "./components/contact-form/contact-form";
import Welcome from "./components/welcome/welcome";
import Benefits from "./components/benefits/benefits";
import { MainStyle } from "./main-styles";
import ScrollHandler from "./components/scroll-handler/scroll-handler";
import NavBar from "./components/nav-bar/nav-bar"
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
  <BrowserRouter>
    <MainStyle>
      <ScrollHandler />
      <NavBar /> 
      <Welcome />
      <Benefits />
      <ContactForm />
    </MainStyle>
  </BrowserRouter>
  );
};

export default App;
