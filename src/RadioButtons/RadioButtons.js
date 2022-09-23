import Panel from "components/Panel/Panel";
import Radio from "components/Radio/Radio";
import Label from "components/Label/Label";
import "./RadioButtons.css";

/* I know how to set checked for the button clicked,
    but I don't know how to uncheck the previously
    active one. */
const RadioButtons = () => {
  return (
    <Panel class="panel">
      <Radio
        isChecked="true"
        id="radioApple"
        name="rdoFruit"
      />
      <Label
        displayedText="Apple"
      />
      <Radio
        id="radioPear"
        name="rdoFruit"
        displayedText="Pear"
      />
      <Label
        displayedText="Pear"
      />
      <Radio
        id="radioOrange"
        name="rdoFruit"
        displayedText="Orange"
      />
      <Label
        displayedText="Orange"
      />
    </Panel>
  );
};

export default RadioButtons;
