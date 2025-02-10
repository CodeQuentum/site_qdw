import React from "react";
import Header from "./components/header";
import ContactSection from "./components/contact";
import Services from "./components/services";
import Apropos from "./components/a-propos";
import CTA from "./components/CTA";
import Footer from "./components/footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <ContactSection />
      <Services />
      <Apropos />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
