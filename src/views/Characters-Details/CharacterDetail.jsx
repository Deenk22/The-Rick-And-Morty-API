import {useParams} from "react-router-dom";
import {useState} from "react";
import {useEffect} from "react";
import CharacterInfoView from "./CharacterInfoView";

// const charactersColorPalette = {
//   Rick: "",
//   Morty: "#F7F052",
//   Summer: "",
//   Beth: "",
//   Jerry: "",
// };

export default function CharacterDetails() {
  const [infoPersonaje, setInfoPersonaje] = useState(null);
  const {id} = useParams();

  useEffect(
    function () {
      async function fetchDetail() {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        const resInfo = await response.json();
        setInfoPersonaje(resInfo);
      }
      fetchDetail();
    },
    [id]
  );

  return (
    <>
      <CharacterInfoView info={infoPersonaje} />
    </>
  );
}
