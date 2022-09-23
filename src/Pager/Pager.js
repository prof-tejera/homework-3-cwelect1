//import { useState } from "react";
import Panel from "components/Panel/Panel";
import "./Pager.css";

const Pager = () => {
  /* Working on figuring out how to actually select the button/link */
  return (
    <Panel class="pager">
      <a href="##">&laquo;</a>
      <a href="##">1</a>
      <a class="active" href="##">2</a>
      <a href="##">3</a>
      <a href="##">4</a>
      <a href="##">5</a>
      <a href="##">&raquo;</a>
    </Panel>
  );
};

export default Pager;
