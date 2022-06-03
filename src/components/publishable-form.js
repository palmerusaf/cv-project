import React, { useState, useEffect } from "react";
import FormInput from "./form-input.js";
import _ from "lodash";

function ContactSection(props) {
  const { inputProps } = props;
  const [isEditMode, setEditMode] = useState(true);
  const [formValues, setFormValues] = useState(setInitialFormStates());

  function setInitialFormStates() {
    return inputProps.reduce((p, n) => ({ ...p, [n.label]: "" }), {});
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormValues({ ...formValues, [name]: value });
  }

  function addFormInputs() {
    return inputProps.map((input) => {
      return (
        <FormInput
          value={formValues[input.label]}
          onChange={handleChange}
          type={input.type}
          label={input.label}
          key={input.label}
        />
      );
    });
  }

  function publishInputs() {
    return inputProps.map((input) => (
      <label key={input.label} className="published__label">
        {_.startCase(input.label)}
        <span className="published__content">{formValues[input.label]}</span>
      </label>
    ));
  }

  if (isEditMode)
    return (
      <form onSubmit={() => setEditMode(!isEditMode)} className="form">
        {addFormInputs()}
        <input type="submit" value="✔️" />
      </form>
    );
  return (
    <div className="published">
      {publishInputs()}
      <button className="edit-button" onClick={() => setEditMode(!isEditMode)}>
        ✏️
      </button>
    </div>
  );
}

export default ContactSection;
