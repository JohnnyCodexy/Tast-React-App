import Checkmark from "./checkmark";

const Question = (props) => {
  return (
    <div className="element">
      <div className="split20">
        <div id="number4" className={props.numberclass}>
          {props.number}
        </div>
        <Checkmark className={props.checkmarkclass}></Checkmark>
      </div>
      <div className="split80">
        <p className="question">What is the best time to contact you?</p>
      </div>
    </div>
  );
};
export default Question;
