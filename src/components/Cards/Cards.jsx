import {Link} from "react-router-dom";
export default function Cards({charactersInfo}) {
  return (
    <>
      <div className="characters">
        <ul>
          {charactersInfo?.results.map((character) => (
            <li key={character.id}>
              <img
                className="img-back"
                width="200px"
                src={character.image}
              ></img>
              <Link
                className="link-characters"
                to={`character/${character.id}`}
              >
                <h4 className="name">{character.name}</h4>
              </Link>
              <p>{character.location.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
