import {Link} from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import StoreIcon from "@mui/icons-material/Store";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import FacebookIcon from "@mui/icons-material/Facebook";
export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-container01">
          {/* <img
            width="50px"
            src="./src/assets/rick_morty.png"
            alt="Morty-Cabreado"
          ></img> */}
          <h2>Thank you for visiting!</h2>
          <p>
            Rick and Morty is an American animated television series for adults
            created by Justin Roiland and Dan Harmon in 2013 created by Justin
            Roiland and Dan Harmon in 2013 for Adult Swim. Adult Swim, also
            aired on Cartoon Network.
          </p>
        </div>
        <div className="footer-container02">
          <p>Follow us on ;</p>
          <div className="link-footer-container">
            <Link
              className="social-media"
              to="https://www.instagram.com/rickandmorty/"
            >
              <InstagramIcon fontSize="large" />
            </Link>
            <Link
              className="social-media"
              to="https://twitter.com/RickandMorty"
            >
              <TwitterIcon fontSize="large" />
            </Link>
            <Link
              className="social-media"
              to="https://www.adultswim.com/games/pocket-mortys"
            >
              <SportsEsportsIcon fontSize="large" />
            </Link>
            <Link
              className="social-media"
              to="https://wbshop.com/collections/rick-and-morty"
            >
              <StoreIcon fontSize="large" />
            </Link>
            <Link
              className="social-media"
              to="https://www.facebook.com/RickandMorty"
            >
              <FacebookIcon fontSize="large" />
            </Link>
          </div>
          <div className="p-img">
            <p>
              Rick and Morty: After being missing for almost 20 years, Rick
              Sanchez unexpectedly shows up at his daughter Beth's house and
              moves in with her and her family. shows up unexpectedly at his
              daughter Beth's house and moves in with her and her family. her
              and her family. Beth welcomes Rick into her home with open arms.
              open arms.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
