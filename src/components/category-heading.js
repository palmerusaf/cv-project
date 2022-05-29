import React, { Component } from "react";

class CategoryHeading extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { content } = this.props;
    return <h2 className="category-heading">{content}</h2>;
  }
}

export default CategoryHeading;
