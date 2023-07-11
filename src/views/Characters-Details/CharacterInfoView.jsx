import {Link} from "react-router-dom";
// eslint-disable-next-line react/prop-types
export default function CharacterInfoView({info}) {
  let statusColor = "";
  let bgRick = "";

  if (info) {
    if (info.status === "Alive") {
      statusColor = "alive-color";
    } else if (info.status === "Dead") {
      statusColor = "dead-color";
    } else {
      statusColor = "unknown-color";
    }
  }

  if (info) {
    if (info.name.includes("Rick")) {
      bgRick = "bg-rick";
    } else {
      bgRick = "bg-no-rick";
    }
  }

  return (
    <>
      {info ? (
        <div className="details-character">
          <div className="object"></div>
          <img className={bgRick} src={info.image} alt={info.name} />
          <div className="general-info">
            {info.type ? <p>Type: {info.type}</p> : null}
            <p className={statusColor}>Status: {info.status}</p>
            <p>Species: {info.species}</p>
            <p>Gender: {info.gender}</p>
            <p>Location: {info.location.name}</p>
          </div>
        </div>
      ) : null}
      <div className="link-details">
        <Link className="back-characters" to="/home">
          Back to Characters
        </Link>
      </div>
      <div className="link-details">
        <Link className="back-characters" to="/about">
          Go to about Rick and Morty
        </Link>
      </div>
    </>
  );
}
