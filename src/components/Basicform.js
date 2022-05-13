import React from "react";
import Main from "./Main";
import Validation from "../context/context";

const BasicForm = (props) => {
  return (
    <Validation.Provider value={[false, false, false, false]}>
      <Main></Main>
    </Validation.Provider>
  );
};

export default BasicForm;
