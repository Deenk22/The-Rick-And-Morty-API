import {Link} from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="bg">
      <div className="landing-container">
        <div>
          <img
            className="landing"
            src="./src/assets/RM_Header.png"
            alt=""
            width="90%"
          />
        </div>
        <h1>Click on the Planet</h1>
        <Link to="login">
          <img
            className="monster-icon"
            src="./src/assets/universe_planet.png"
            alt="Monster Icon"
            width="5%"
          />
        </Link>
        {/* <p>
          A veces la ciencia es mucho más arte que ciencia, Morty. Mucha gente
          no entiende eso.
        </p> */}
      </div>
    </div>
  );
}
