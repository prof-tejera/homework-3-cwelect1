import React from "react";

const Form = ({ btnText, chkBoxText, ...props }) => {
  //return <form>{props.children}</form>;
  return (<form>
    <input type="text"></input><br></br>
    <input type="password"></input><br></br>
    <input type="checkbox" id="rememberme"></input>
    <label for="rememberme">{chkBoxText}</label><br></br>
    <button
      {...props}
    >
      {btnText}
    </button>
  </form>
  );
};

export default Form;
