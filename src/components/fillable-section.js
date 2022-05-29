import React, { Component } from "react";

class FillableSection extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    console.log(e);
  }

  render() {
    return <form onSubmit={this.handleSubmit} className="form">
    <input type="submit" value="" />
    </form>;
  }
}

export default FillableSection;
