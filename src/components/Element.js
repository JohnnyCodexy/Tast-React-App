import Checkmark from "./checkmark";
const Element = (props) => {
  return (
    <div className="element">
      <div className="split20">
        <div id="number1" className={props.numberclass}>
          {props.number}
        </div>
        <Checkmark className={props.checkmarkclass}></Checkmark>
      </div>
      <div className="split80">
        <label htmlFor="fname">First name:</label>
        <input
          value={props.value}
          onChange={props.onChange}
          type="text"
          className="awsome_input"
          id="fname"
          name="fname"
          required
        />
        <span className="awsome_input_border"></span>
      </div>
    </div>
  );
};

export default Element;
