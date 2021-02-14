import React from "react";
import PropTypes from "prop-types";

const People = props => {
  const { name, status, anything, deletePeople } = props;

  if (name === "Darth Vader") {
    return <button onClick={deletePeople}>Delete People</button>;
  }

  return (
    <>
      <h3>{name}</h3>
      <p>{status}</p>
      <p>{anything}</p>
    </>
  );
};

People.defaultProps = {
  name: "John Doe"
};

People.propTypes = {
  deletePeople: PropTypes.func.isRequired,
  name: PropTypes.oneOf(["Obi Wan", "Luke Skywalker", "Darth Vader"]),
  status: PropTypes.string,
  anything: PropTypes.number,
  peoples: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      status: PropTypes.string
    })
  ),
  isLogin: PropTypes.bool
};

export default People;
