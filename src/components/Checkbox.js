const Checkbox = (props) => {
  return (
    <div className="element">
      <div className="split20"></div>
      <div className="split80">
        <div>
          <input onChange={props.onChange2} id="checkbox1" type="checkbox" />
          <label htmlFor="checkbox1"> Monday 3pm</label>
          <br />
          <br />
          <input onChange={props.onChange1} type="checkbox" id="checkbox2" />
          <label htmlFor="checkbox2"> Tuesday 3pm</label>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Checkbox;
