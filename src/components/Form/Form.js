import React from "react";

const Form = ({ btnText, chkBoxText, ...props }) => {
  //return <form>{props.children}</form>;
  return (<form>
    
    <label className="required">*</label>
    <label>Username </label>
    <input type="text" id="username"></input><br></br>
    <label className="required">*</label>
    <label>Password </label>
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
