import React, { Component } from "react";
import FormInput from "./form-input.js";

class ContactSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditMode: true,
    };
    this.setStateLabels(this.props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
  }

  setStateLabels({ formInputs }) {
    formInputs.forEach((input) => (this.state[input.label] = ""));
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

  addFormInputs({ formInputs }) {
    return formInputs.map((input) => {
      return (
        <FormInput
          value={this.state[input.label]}
          onChange={this.handleChange}
          type={input.type}
          label={input.label}
          key={input.label}
        />
      );
    });
  }

  publishInputs({ formInputs }) {
    return formInputs.map((input) => (
      <span key={input.label} className="published__item">{this.state[input.label]}</span>
    ));
  }

  render() {
    if (this.state.isEditMode)
      return (
        <form onSubmit={this.handleSubmit} className="form">
          {this.addFormInputs(this.props)}
          <input type="submit" value="✔️" />
        </form>
      );
    return (
      <div className="published">
        {this.publishInputs(this.props)}
        <button className="edit-button" onClick={this.toggleEditMode}>
          🖉
        </button>
      </div>
    );
  }
}

export default ContactSection;
