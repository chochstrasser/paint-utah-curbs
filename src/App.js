import React from "react";
import MainNav from "./components/nav/main-nav";
import ContactForm from "./components/contact-form/contact-form";
import Welcome from "./components/welcome/welcome";
import Benefits from "./components/benefits/benefits";
import { MainStyle } from "./main-styles";
const App = () => {
  return (
    <MainStyle>
      <MainNav />
      <Welcome />
      <Benefits />
      <ContactForm />
    </MainStyle>
  );
};

export default App;
