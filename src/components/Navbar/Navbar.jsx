import {Link} from "react-router-dom";
import {useUserLoginContext} from "../../context/UserLoginContext";

export default function Navbar() {
  const {logout} = useUserLoginContext();
  return (
    <>
      <div className="nav">
        <Link to="home">CHARACTERS</Link>
        <Link to="about">ABOUT RICK AND MORTY</Link>
        <Link>SOON...</Link>
        <Link className="logout-link" onClick={logout}>
          LOGOUT
        </Link>
      </div>
    </>
  );
}
