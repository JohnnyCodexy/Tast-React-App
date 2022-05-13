import Validation from "../context/context";
import { useContext } from "react";

const Footer = () => {
  const ctx = useContext(Validation);
  let disabled = true;
  let n = 0;
  for (let i = 0; i < ctx.length; i++) {
    if (ctx[i] === true) {
      n++;
    }
  }

  if (n === 4) {
    disabled = false;
  } else {
    disabled = true;
  }
  return (
    <div className="footer">
      <div className="split20"></div>
      <div className="split80">
        <button disabled={disabled}>Submit</button>
      </div>
    </div>
  );
};

export default Footer;
