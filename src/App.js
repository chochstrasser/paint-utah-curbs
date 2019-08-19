import React from "react";
import MainNav from "./components/nav/main-nav";
import ContactForm from "./components/contact-form/contact-form";
import Header from "./components/header/header";

const App = () => {
  return (
    <>
      <MainNav />
      <Header />
      <ContactForm />
    </>
  );
};

export default App;
