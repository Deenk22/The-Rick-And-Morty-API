import Homeviews from "./Homeview";
// import UseFetch from "../../components/useFetch/UseFetch";
import {useEffect, useState} from "react";

// const apiData = UseFetch(`https://rickandmortyapi.com/api/character`);

export default function Home() {
  const [characters, setCharacters] = useState(null);

  useEffect(function () {
    async function fetchData() {
      const response = await fetch(`https://rickandmortyapi.com/api/character`);
      const charactersData = await response.json();
      setCharacters(charactersData);
    }
    fetchData();
  }, []);
  // const data = apiData.read();
  return (
    <>
      <Homeviews charactersInfo={characters} />
    </>
  );
}
