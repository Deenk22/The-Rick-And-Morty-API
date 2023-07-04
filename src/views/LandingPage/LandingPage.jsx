import {Link} from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="text-info">
      <div className="RM">
        <img src="./src/assets/RM_Header.png" alt="Portada" />
      </div>
      <div className="link-tologin">
        <h1>Press the button</h1>
        <Link to="login">
          <button>VIEW CONTENT</button>
        </Link>
      </div>
      <p>Remember that to view the content you must be logged in</p>
    </div>
  );
}
