import {Link} from "react-router-dom";
import {useUserLoginContext} from "../../context/UserLoginContext";
import LogoutIcon from "@mui/icons-material/Logout";
export default function Navbar() {
  const {logout} = useUserLoginContext();
  return (
    <>
      <div className="nav">
        <Link to="home">HOME</Link>
        <Link to="about">ABOUT RICK AND MORTY</Link>
        <Link>SOON...</Link>
        <Link className="logout-link" onClick={logout}>
          <LogoutIcon fontSize="small" />
        </Link>
      </div>
    </>
  );
}
