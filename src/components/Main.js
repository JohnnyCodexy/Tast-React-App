import React from "react";
import { useState, useContext } from "react";
import Validation from "../context/context";
import Header from "./header";
import Footer from "./footer";
import Element from "./Element";
import Checkbox from "./Checkbox";
import Question from "./Question";

const Main = () => {
  const ctx = useContext(Validation);
  const [firstname, setFirstname] = useState("");
  const [firstnameValid, setFirstnameValid] = useState(false);

  const [lastname, setLastName] = useState("");
  const [lastnameValid, setlLastnameValid] = useState(false);

  const [emailValue, setEmailValue] = useState("");
  const [emailValid, setEmailValid] = useState(false);

  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);

  const checkboxInputHandler1 = (e) => {
    setChecked1(!checked1);
  };

  const checkboxInputHandler2 = (e) => {
    setChecked2(!checked2);
  };

  const fnameInputHandler = (event) => {
    setFirstname(event.target.value);
    if (event.target.value.trim() !== "") {
      setFirstnameValid(true);
      ctx[0] = true;
    } else if (event.target.value.trim() === "") {
      setFirstnameValid(false);
      ctx[0] = false;
    }
  };

  const lnameInputHandler = (event) => {
    setLastName(event.target.value);
    if (event.target.value.trim() !== "") {
      setlLastnameValid(true);
      ctx[1] = true;
    } else if (event.target.value.trim() === "") {
      setlLastnameValid(false);
      ctx[1] = false;
    }
  };

  const emailInputHandler = (event) => {
    setEmailValue(event.target.value);
    if (event.target.value.includes("@")) {
      setEmailValid(true);
      ctx[2] = true;
    } else if (!event.target.value.includes("@")) {
      setEmailValid(false);
      ctx[2] = false;
    }
  };

  const fnameclassNumber = firstnameValid ? "circle hidden" : "circle";
  const fnameclassCheck = firstnameValid ? "checkmark" : "checkmark hidden";

  const lnameclassNumber = lastnameValid ? "circle hidden" : "circle";
  const lnameclassCheck = lastnameValid ? "checkmark" : "checkmark hidden";

  const emailclassNumber = emailValid ? "circle hidden" : "circle";
  const emailclassCheck = emailValid ? "checkmark" : "checkmark hidden";

  const checkValid = checked1 || checked2 ? true : false;
  if (checkValid) {
    ctx[3] = true;
  } else {
    ctx[3] = false;
  }

  const checkedClassNumber = checked1 || checked2 ? "circle hidden" : "circle";
  const checkckedClassCheck =
    checked1 || checked2 ? "checkmark" : "checkmark hidden";

  return (
    <React.Fragment>
      <Header></Header>
      <form>
        <Element
          number="1"
          numberclass={fnameclassNumber}
          checkmarkclass={fnameclassCheck}
          value={firstname}
          onChange={fnameInputHandler}
        ></Element>

        <Element
          number="2"
          numberclass={lnameclassNumber}
          checkmarkclass={lnameclassCheck}
          value={lastname}
          onChange={lnameInputHandler}
        ></Element>

        <Element
          number="3"
          numberclass={emailclassNumber}
          checkmarkclass={emailclassCheck}
          value={emailValue}
          onChange={emailInputHandler}
        ></Element>
        <Question
          number="4"
          numberclass={checkedClassNumber}
          checkmarkclass={checkckedClassCheck}
        ></Question>

        <Checkbox
          onChange1={checkboxInputHandler1}
          onChange2={checkboxInputHandler2}
        ></Checkbox>

        <Footer></Footer>
      </form>
    </React.Fragment>
  );
};

export default Main;
