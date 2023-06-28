import {Link} from "react-router-dom";
export default function Homeviews({dataApi}) {
  return (
    <>
      <div className="characters">
        <ul>
          {dataApi?.results.map((character) => (
            <li key={character.id}>
              <img
                className="img-back"
                width="200px"
                src={character.image}
              ></img>
              <h4 className="name">{character.name}</h4>
              <p>{character.location.name}</p>
              <Link className="link-characters" to={"characters-details"}>
                Details
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}