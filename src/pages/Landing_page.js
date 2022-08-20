import React, { Component } from "react";

import Header from "parts/Header";
import Hero from "./Hero";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";

import json_landingPage from "json/landingPage.json";

export default class Landing_page extends Component {
  constructor(props) {
    super(props);
    this.mostPickedRef = React.createRef();
  }
  render() {
    return (
      <>
        <Header {...this.props} />
        <Hero mostPickedRef={this.mostPickedRef} data={json_landingPage.hero} />
        <MostPicked
          mostPickedRef={this.mostPickedRef}
          data={json_landingPage.mostPicked}
        />
        <Categories data={json_landingPage.categories} />
      </>
    );
  }
}
