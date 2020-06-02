import React, { memo } from "react";

function Example() {
  console.log("render");
  return <p>Привет, я пример</p>;
}

export default memo(Example);