import {Suspense} from "react";
import UseFetch from "./components/useFetch/UseFetch";
import "./App.css";
import Title from "./components/Title/Title";
import Search from "./components/Search/Search";
import Footer from "./components/Footer/Footer";

let page = Math.floor(Math.random() * 20) + 1;

const apiData = UseFetch(
  `https://rickandmortyapi.com/api/character?page=${page}`
);

function App() {
  const data = apiData.read();

  return (
    <>
      <Title />
      <Search />
      <Suspense fallback={<div>Loagind...</div>}>
        <div className="characters">
          <ul>
            {data?.results.map((character) => (
              <li key={character.id}>
                <img
                  className="img-back"
                  width="200px"
                  src={character.image}
                ></img>
                <h4 className="name">{character.name}</h4>
                <p>{character.origin.name}</p>
                <p>Status - {character.status}</p>
              </li>
            ))}
          </ul>
        </div>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
