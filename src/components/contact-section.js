import React, { Component } from "react";
import FormInput from "./form-input.js";

class ContactSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditMode: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.toggleEditMode();
  }

  handleEdit(e) {
    this.toggleEditMode();
  }

  toggleEditMode() {
    this.setState({ isEditMode: !this.state.isEditMode });
  }

  render() {
    console.log(this.state.isEditMode);
    if (this.state.isEditMode)
      return (
        <form onSubmit={this.handleSubmit} className="form">
          <FormInput type="text" label="Name" />
          <FormInput type="email" label="Email" />
          <FormInput type="tel" label="Phone Number" />
          <input type="submit" value="✔️" />
        </form>
      );
    return (
      <button className="edit-button" onClick={this.handleEdit}>
        🖉
      </button>
    );
  }
}

export default ContactSection;
