import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ children, ...restProps }) {
  return (
    <button className={styles.buttonStyle} {...restProps}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node
};

export default Button;
