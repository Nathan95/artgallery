import React from "react";
import PropTypes from "prop-types";
import '../css/InputField.scss';

const InputField = ({
  label,
  validation,
  handleChange,
  value,
  placeholder,
  className,
  validationTestID,
  type,
  focus,
  name
}) => {
  return (
    <React.Fragment>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        name={name}
        id={label}
        aria-label={label}
        aria-required="true"
        className={className}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        onFocus={focus}
      />
      {validation && (
        <div>
          <span className="errorText" id={validationTestID} tabIndex={0}>
            {validation}
          </span>
        </div>
      )}
    </React.Fragment>
  );
};

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  validation: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string.isRequired,
  validationTestID: PropTypes.string,
  focus: PropTypes.func
};

InputField.defaultProps = {
  validation: "",
  value: "",
  name: "",
  placeholder: "",
  focus: () => {}
}

export default InputField;
