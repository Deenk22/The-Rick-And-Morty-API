import Cards from "../../components/Cards/Cards";
import Pagination from "../../components/Pagination/Pagination";
export default function Homeviews({
  charactersInfo,
  page,
  totalPages,
  onChange,
}) {
  return (
    <>
      <Cards charactersInfo={charactersInfo} />
      <Pagination totalPages={totalPages} page={page} onChange={onChange} />
    </>
  );
}
