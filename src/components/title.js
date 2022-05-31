import React from "react";
import CompanyLogo from "../imgs/company-logo.jpg";

class Title extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1 className="heading">
        Welcome to <img src={CompanyLogo} alt="logo" className="heading__logo" />
      </h1>
    );
  }
}

export default Title;
