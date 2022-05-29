import React, { Component } from "react";
import _ from "lodash";

class FormInput extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { type, label, onChange, value } = this.props;
    const kebabLabel = _.kebabCase(label);
    const lowerLabel = _.lowerCase(label);
    return (
      <label htmlFor={kebabLabel}>
        {`${label}: `}
        <input
          type={type}
          className="form__input"
          id={kebabLabel}
          name={kebabLabel}
          placeholder={`Enter your ${lowerLabel}`}
          required={true}
          onChange={onChange}
          value={value}
        />
      </label>
    );
  }
}

export default FormInput;
