import React from "react";
import { Component } from "react";
import Card from "./Card";

class About extends Component {
  render() {
    return (
      <div className="about">
        <h1 id="teamheader">The FreeHub Team</h1>
        <Card />
      </div>
    );
  }
}

export default About;
