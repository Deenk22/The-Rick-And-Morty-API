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
          <Link className="link-starring" to="/character/1">
            <img width="210px" src="./src/assets/1.jpeg" alt="Rick Sanchez" />
          </Link>
          <h2>Rick Sánchez</h2>
        </div>
        <div>
          <Link className="link-starring" to="/character/2">
            <img width="210px" src="./src/assets/2.png" alt="Morty Smith" />
          </Link>
          <h2>Morty Smith</h2>
        </div>
        <div>
          <Link className="link-starring" to="/character/3">
            <img width="210px" src="./src/assets/3.jpeg" alt="Summer Smith" />
          </Link>
          <h2>Summer Smith</h2>
        </div>
        <div>
          <Link className="link-starring" to="/character/4">
            <img width="210px" src="./src/assets/4.jpeg" alt="Beth Smith" />
          </Link>
          <h2>Beth Smith</h2>
        </div>
        <div>
          <Link className="link-starring" to="/character/5">
            <img width="210px" src="./src/assets/5.png" alt="Jerry Smith" />
          </Link>
          <h2>Jerry Smith</h2>
        </div>
      </div>
    </>
  );
}
