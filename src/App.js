import React from "react";
import MainNav from "./components/nav/main-nav";
import ContactForm from "./components/contact-form/contact-form";
import Header from "./components/header/header";
import Welcome from "./components/welcome/welcome";
import Benefits from "./components/benefits/benefits";
import { MainStyle } from "./styled-main";
const App = () => {
  return (
    <MainStyle>
      <MainNav />
      <Header />
      <Welcome />
      <Benefits />
      <ContactForm />
    </MainStyle>
  );
};

export default App;
