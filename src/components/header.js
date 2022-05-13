import CircularDeterminate from "./progressbar";

const Header = () => {
  return (
    <div className="header">
      <div className="split20">
        <CircularDeterminate></CircularDeterminate>
      </div>
      <div className="split80">
        <p className="smalltext">New York State</p>
        <p className="biggertext">Request for Contact</p>
      </div>
    </div>
  );
};

export default Header;
