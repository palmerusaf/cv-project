import "./App.scss";
import React, { Component } from "react";
import Title from "./components/title.js";
import Directions from "./components/directions.js";
import CategoryHeading from "./components/category-heading.js";
import ContactSection from "./components/contact-section.js";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="content">
        <Title />
        <Directions />
        <CategoryHeading content="Contact" />
        <ContactSection></ContactSection>
        <CategoryHeading content="Education" />
        <CategoryHeading content="Work Experience" />
      </div>
    );
  }
}

export default App;
