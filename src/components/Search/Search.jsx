export default function Search({value, onChange}) {
  return (
    <>
      <div className="search-container">
        <input value={value} onChange={onChange} type="search" />
        <button>Search Characters</button>
      </div>
    </>
  );
}
