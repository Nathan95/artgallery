import React from "react";
import "../css/Button.scss";
import PropTypes from "prop-types";

const Button = ({ onClick, title, type, classname }) => {

  return (
    <React.Fragment>
      <button
        className={classname}
        type={type}
        onClick={onClick}
        id={title}
      >
        {title}
      </button>
    </React.Fragment>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
  classname: PropTypes.string
};

export default Button;
