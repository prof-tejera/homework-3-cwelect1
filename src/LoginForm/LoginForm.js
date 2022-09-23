//import { useState } from "react";
import Form from "components/Form/Form";
//import Button from "components/Button/Button";
import "./LoginForm.css";

const LoginForm = () => {
  //const [activeType, setActiveType] = useState(null);
  console.log("I am a Login form");

  return (
    <Form 
      btnText="Submit"
      chkBoxText="Remember Me"
    />
  );
};

export default LoginForm;
