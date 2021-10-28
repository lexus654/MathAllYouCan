import "./Search.css";
const Search = (props) => {
  return (
    <div className="searchBar">
      <input
        className="search--input"
        type="text"
        placeholder="Search.."
      ></input>
    </div>
  );
};

export default Search;
