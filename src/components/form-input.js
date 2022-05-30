import React, { Component } from "react";
import _ from "lodash";

class FormInput extends Component {
  constructor(props) {
    super(props);
  }

  enrichLabel(pLabel) {
    const lowerLabel = _.lowerCase(pLabel);
    return {
      lower: lowerLabel,
      kebab: _.kebabCase(lowerLabel),
      title: _.startCase(lowerLabel),
      camel: _.camelCase(lowerLabel),
    };
  }

  render() {
    const { type, onChange, value } = this.props;
    const label = this.enrichLabel(this.props.label);

    return (
      <label htmlFor={label.kebab}>
        {`${label.title}: `}
        <input
          type={type}
          className="form__input"
          id={label.kebab}
          name={label.camel}
          placeholder={`Enter your ${label.lower}`}
          required={true}
          onChange={onChange}
          value={value}
        />
      </label>
    );
  }
}

export default FormInput;
