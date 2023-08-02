import {useEffect, useState} from "react";
import Homeviews from "./Homeview";
import Title from "../../components/Title/Title";

// import UseFetch from "../../components/useFetch/UseFetch";

// const apiData = UseFetch(`https://rickandmortyapi.com/api/character`);
const numPage = 1;

export default function Home() {
  const [characters, setCharacters] = useState(null);
  const [message, setMessage] = useState();
  const [page, setPage] = useState(numPage);
  const [searchCharacters, setSearchCharacters] = useState("");

  function handleChange(event, value) {
    setPage(value);
  }

  function handleSearch(e) {
    setSearchCharacters(e.target.value);
  }

  useEffect(
    function () {
      async function fetchData() {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchCharacters}`
        );
        if (!response.ok) {
          setMessage("Character not Found");
          setCharacters(null);
        } else {
          const charactersData = await response.json();
          setCharacters(charactersData);
          setMessage(null);
        }
      }
      fetchData();
    },
    [page, searchCharacters, message]
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
        onSearch={handleSearch}
        searchCharacters={searchCharacters}
        message={message}
      />
    </>
  );
}
