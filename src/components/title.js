import React from "react";
import CompanyLogo from "../imgs/company-logo.jpg";

class Title extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1 className="title">
        Welcome to <img src={CompanyLogo} alt="logo" className="logo" />
      </h1>
    );
  }
}

export default Title;
