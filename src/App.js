import "./App.scss";
import React, { Component } from "react";
import Title from "./components/title.js";
import Directions from "./components/directions.js";
import CategoryHeading from "./components/category-heading.js";
import PublishableForm from "./components/publishable-form";

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
        <PublishableForm
          formInputs={[
            { type: "text", label: "name" },
            { type: "email", label: "email" },
            { type: "tel", label: "phoneNumber" },
          ]}
        />
        <CategoryHeading content="Education" />
        <PublishableForm
          formInputs={[
            { type: "text", label: "schoolName" },
            { type: "text", label: "titleOfStudy" },
            { type: "date", label: "DateOfStudy" },
          ]}
        />
        <CategoryHeading content="Work Experience" />
        <PublishableForm
          formInputs={[
            { type: "text", label: "companyName" },
            { type: "text", label: "position" },
            { type: "text", label: "tasksPerformed" },
            { type: "date", label: "dateFrom" },
            { type: "date", label: "dateTo" },
          ]}
        />
      </div>
    );
  }
}

export default App;
