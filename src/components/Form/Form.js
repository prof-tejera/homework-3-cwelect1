import React from "react";

const Form = ({ btnText, chkBoxText, ...props }) => {
  //return <form>{props.children}</form>;
  return (<form>
    
    <label>* Username </label>
    <input type="text" id="username"></input><br></br>
    <label>* Password </label>
    <input type="password" id="password"></input><br></br>
    <input type="checkbox" id="rememberme"></input>
    <label >{chkBoxText}</label><br></br>
    <button
      {...props}
    >
      {btnText}
    </button>
  </form>
  );
};

export default Form;
