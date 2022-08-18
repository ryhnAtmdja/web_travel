import React, { Component } from "react";

import Header from "parts/Header";
import Hero from "./Hero";

import json_landingPage from "json/landingPage.json";

export default class LandingPage extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        <Header {...this.props} />
        <Hero data={json_landingPage.hero} />
      </>
    );
  }
}
