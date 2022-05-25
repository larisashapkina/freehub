import React from "react";
import { Component } from "react";
import Card from "./Card";

class About extends Component {
  render() {
    return (
      <div className="about">
        <h3 id="descriptionHeader">The FreeHub Team</h3>
        <Card />
      </div>
    );
  }
}

export default About;
