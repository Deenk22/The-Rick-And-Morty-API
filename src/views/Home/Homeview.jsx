import Cards from "../../components/Cards/Cards";
import Pagination from "../../components/Pagination/Pagination";
import Search from "../../components/Search/Search";
export default function Homeviews({
  charactersInfo,
  page,
  totalPages,
  onChange,
}) {
  return (
    <>
      <Search />
      <Cards charactersInfo={charactersInfo} />
      <Pagination totalPages={totalPages} page={page} onChange={onChange} />
    </>
  );
}
