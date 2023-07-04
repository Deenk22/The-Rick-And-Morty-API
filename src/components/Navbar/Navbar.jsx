import {Link} from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div className="nav">
        <Link to="home">HOME</Link>
        <Link to="about">ABOUT RICK AND MORTY</Link>
      </div>
    </>
  );
}
