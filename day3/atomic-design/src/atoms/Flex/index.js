import React from "react";
import styles from "./Flex.modules.css";

const Flex = ({ children }) => {
  return <div className={styles.flex}>{children}</div>;
};

export const FlexItem = ({ children }) => {
  return <div className={styles.flexItem}>{children}</div>;
};

export default Flex;
