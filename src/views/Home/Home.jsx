import Homeviews from "./Homeview";
import UseFetch from "../../components/useFetch/UseFetch";
import {Suspense} from "react";

let page = Math.floor(Math.random() * 20) + 1;

const apiData = UseFetch(
  `https://rickandmortyapi.com/api/character?page=${page}`
);

export default function Home() {
  const data = apiData.read();
  return (
    <>
      <Suspense fallback={<div>Loagind...</div>}>
        <Homeviews dataApi={data} />
      </Suspense>
    </>
  );
}
