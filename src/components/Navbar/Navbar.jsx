import {Link} from "react-router-dom";
import {roles} from "../../const/roles";
import {useUserLoginContext} from "../../context/UserLoginContext";

export default function Navbar() {
  const {logout, user} = useUserLoginContext();
  console.log(user);
  return (
    <>
      <div className="nav">
        {roles.ALL_USERS.includes(user.userRole) ? (
          <Link to="/home">CHARACTERS</Link>
        ) : null}

        {user.userRole === roles.ADMIN ? (
          <Link to="/about">ABOUT RICK AND MORTY</Link>
        ) : null}

        <Link>SOON...</Link>
        <Link className="logout-link" onClick={logout}>
          LOGOUT
        </Link>
      </div>
    </>
  );
}
