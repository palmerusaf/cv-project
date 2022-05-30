import React, { Component } from "react";
import FormInput from "./form-input.js";
import PublishableForm from "./publishable-form.js";

class ContactSection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <PublishableForm
        formInputs={[
          { type: "text", label: "name" },
          { type: "email", label: "email" },
          { type: "tel", label: "phoneNumber" },
        ]}
      />
    );
  }
}

export default ContactSection;
