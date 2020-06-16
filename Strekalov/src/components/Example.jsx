import React, { memo } from "react";
import PropTypes from "prop-types";

function Example({ name }) {

  console.log("render");
  return <p>тест пример</p>;
}

Example.propTypes = {
  name: PropTypes.string,
};

export default memo(Example);