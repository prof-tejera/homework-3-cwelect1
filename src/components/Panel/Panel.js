import React from "react";

const Panel = (props) => {
  return <div class={props.class}>{props.children}</div>;
};

export default Panel;
