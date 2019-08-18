import React from "react";
import MainNav from "./components/nav/main-nav";
import ContactForm from "./components/contact-form/contact-form";
import Header from "./components/header/header";
import Welcome from "./components/welome/welcome";
import styled from "styled-components";

const MainStyle = styled.div`
  font-family: Lato, Helvetica, Arial, Helvetica, sans-serif;
`;
const App = () => {
  return (
    <MainStyle>
      <MainNav />
      <Header />
      <Welcome />
      <ContactForm />
    </MainStyle>
  );
};

export default App;
