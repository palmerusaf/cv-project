import React, { Component } from "react";
import FormInput from "./form-input.js";

class ContactSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditMode: true,
      name: "",
      email: "",
      "phone-number": "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.toggleEditMode();
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  toggleEditMode(e) {
    this.setState({ isEditMode: !this.state.isEditMode });
  }

  render() {
    if (this.state.isEditMode)
      return (
        <form onSubmit={this.handleSubmit} className="form">
          <FormInput
            value={this.state.name}
            onChange={this.handleChange}
            type="text"
            label="Name"
          />
          <FormInput
            value={this.state.email}
            onChange={this.handleChange}
            type="email"
            label="Email"
          />
          <FormInput
            value={this.state["phone-number"]}
            onChange={this.handleChange}
            type="tel"
            label="Phone Number"
          />
          <input type="submit" value="✔️" />
        </form>
      );
    return (
      <div className="published">
        <span>{this.state.name}</span>
        <span>{this.state.email}</span>
        <span>{this.state["phone-number"]}</span>
        <button className="edit-button" onClick={this.toggleEditMode}>
          🖉
        </button>
      </div>
    );
  }
}

export default ContactSection;
