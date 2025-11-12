import React from "react";
import "./i18n";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Section from "./components/section";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Section />
      <Footer />
    </>
  );
}

export default App;
