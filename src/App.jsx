/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 * and if you dont have a resume just use the sample for now
 * but its stupid that you dont have a resume make one ASAP
 */
const siteProps = {
  name: "Ali Asghar",
  title: "Web Application Security Engineer",
  email: "aliasghar.bsinfo@gmail.com",
  gitHub: "Aurora_Dreamer",
  instagram: "https://www.instagram.com/twat_lord/?hl=en",
  linkedIn: "https://pk.linkedin.com/in/aliasghar-cybersec",
  medium: "eleanor-writes",
  twitter: "eleanor_tweets",
  youTube: "eleanor_creates",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
