import VideocamIcon from "@mui/icons-material/Videocam";
import {Link} from "react-router-dom";
export default function MainCharacters() {
  return (
    <>
      <h1 className="main-characters-title">
        Starring <VideocamIcon fontSize="large" />
      </h1>
      <div className="img-about">
        <div>
          <img src="./src/assets/1.jpeg" alt="Rick Sanchez" />
          <Link className="link-starring" to="/character/1">
            <h2>Rick Sánchez</h2>
          </Link>
        </div>
        <div>
          <img src="./src/assets/2.png" alt="Morty Smith" />
          <Link className="link-starring" to="/character/2">
            <h2>Morty Smith</h2>
          </Link>
        </div>
        <div>
          <img src="./src/assets/3.jpeg" alt="Summer Smith" />
          <Link className="link-starring" to="/character/3">
            <h2>Summer Smith</h2>
          </Link>
        </div>
        <div>
          <img src="./src/assets/4.jpeg" alt="Beth Smith" />
          <Link className="link-starring" to="/character/4">
            <h2>Beth Smith</h2>
          </Link>
        </div>
        <div>
          <img src="./src/assets/5.png" alt="Jerry Smith" />
          <Link className="link-starring" to="/character/5">
            <h2>Jerry Smith</h2>
          </Link>
        </div>
      </div>
    </>
  );
}
