import React, { Component } from "react";

class ContactSection extends Component {
  constructor(props) {
    super(props);
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <label htmlFor="persons-name">Name: </label>
        <input
          type="text"
          className="form__input"
          id="persons-name"
          name="persons-name"
          placeholder="Enter your name"
          required={true}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          className="form__input"
          id="email"
          name="email"
          placeholder="Enter your email"
          required={true}
        />
        <label htmlFor="phone">Phone: </label>
        <input
          type="tel"
          className="form__input"
          id="phone"
          name="phone"
          placeholder="Enter your phone number"
          required={true}
        />
        <input type="submit" value="✔️" />
      </form>
    );
  }
}

export default ContactSection;
