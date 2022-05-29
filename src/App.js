import "./App.scss";
import React, { Component } from "react";
import Title from "./components/title.js";
import Directions from "./components/directions.js";
import CategoryHeading from "./components/category-heading.js";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="content">
        <Title></Title>
        <Directions></Directions>
        <CategoryHeading content="Contact" />
        <CategoryHeading content="Education" />
        <CategoryHeading content="Work Experience" />
      </div>
    );
  }
}

export default App;
