import Cards from "../../components/Cards/Cards";
import Pagination from "../../components/Pagination/Pagination";
import Search from "../../components/Search/Search";
export default function Homeviews({
  charactersInfo,
  page,
  totalPages,
  onChange,
  onSearch,
  searchCharacters,
}) {
  return (
    <>
      <Search onChange={onSearch} value={searchCharacters} />
      <Cards charactersInfo={charactersInfo} />
      <Pagination totalPages={totalPages} page={page} onChange={onChange} />
    </>
  );
}
