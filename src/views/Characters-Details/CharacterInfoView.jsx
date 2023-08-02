import {Link} from "react-router-dom";
import {useUserLoginContext} from "../../context/UserLoginContext";
import {roles} from "../../const/roles";
const statusColor = {
  Alive: "#89FC00",
  Dead: "#F25757",
  unknown: "#3dcfd1",
};

export default function CharacterInfoView({info}) {
  const {user} = useUserLoginContext();
  let bgRick = "";
  if (info) {
    info.name.includes("Rick") ? (bgRick = "bg-rick") : (bgRick = "bg-no-rick");
  }

  return (
    <>
      {info ? (
        <div className="details-character">
          <div className="object"></div>
          <img className={bgRick} src={info.image} alt={info.name} />
          <div className="general-info">
            {info.type ? <p>Type: {info.type}</p> : null}
            <p style={{color: statusColor[info.status]}}>
              Status: {info.status}
            </p>
            <p>Species: {info.species}</p>
            <p>Gender: {info.gender}</p>
            <p>Location: {info.location.name}</p>
          </div>
          <div className="link-container">
            <div className="individual-link">
              <Link className="back-characters" to="/home">
                Back to Characters
              </Link>
            </div>
            {user.userRole === roles.ADMIN ? (
              <div className="individual-link">
                <Link className="back-characters" to="/about">
                  About Rick and Morty
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
      <div></div>
    </>
  );
}
