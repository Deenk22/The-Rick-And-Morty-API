import {useEffect, useState} from "react";
import Homeviews from "./Homeview";
import Title from "../../components/Title/Title";

// import UseFetch from "../../components/useFetch/UseFetch";

// const apiData = UseFetch(`https://rickandmortyapi.com/api/character`);

export default function Home() {
  const [characters, setCharacters] = useState(null);
  const [page, setPage] = useState(1);

  function handleChange(event, value) {
    setPage(value);
  }

  useEffect(
    function () {
      async function fetchData() {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?page=${page}`
        );
        const charactersData = await response.json();
        setCharacters(charactersData);
      }
      fetchData();
    },
    [page]
  );

  // const data = apiData.read();

  return (
    <>
      <Title />
      <Homeviews
        charactersInfo={characters}
        page={page}
        totalPages={characters?.info.pages}
        onChange={handleChange}
      />
    </>
  );
}
