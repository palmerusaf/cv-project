import _ from "lodash";

function FormInput(props) {
  const { type, onChange, value } = props;
  const label = enrichLabel(props.label);

  function enrichLabel(pLabel) {
    const lowerLabel = _.lowerCase(pLabel);
    return {
      lower: lowerLabel,
      kebab: _.kebabCase(lowerLabel),
      title: _.startCase(lowerLabel),
      camel: _.camelCase(lowerLabel),
    };
  }

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

export default FormInput;
