// Assets
import "@fontsource/raleway";

// Components

import React from "react";

import { responsiveFontSizes } from "@material-ui/core/styles";

import { Container } from "@material-ui/core";

import { ThemeProvider, createMuiTheme } from "@material-ui/core";

import { Element } from "react-scroll";

// Views

import About from "./components/About";
import Partners from "./components/Partners";
import BecomePartner from "./components/BecomePartner";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

let theme = createMuiTheme({
  typography: {
    fontFamily: ["Raleway"],
  },
});

theme = responsiveFontSizes(theme);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Element name="home" />
      <NavBar />
      <Carousel />
      <Element name="about" />
      <About />
      <Element name="partners" />
      <Partners />
      <Element name="contact" />
      <BecomePartner />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
