import "./Search.css";
import Formula from "./formula/Formula";
import AreaRect from "../components/formula/AreaRect";
const Search = (props) => {
  const listOfFormula = [
    {
      name: "Area of Rectangle",
      formula: <AreaRect></AreaRect>,
    },
    {
      name: "Area of Square",
      formula: <AreaRect></AreaRect>,
    },
    {
      name: "Area of triangle",
      formula: <AreaRect></AreaRect>,
    },
    {
      name: "Area of triangle",
      formula: <AreaRect></AreaRect>,
    },
    {
      name: "Area of triangle",
      formula: <AreaRect></AreaRect>,
    },
    {
      name: "Area of triangle",
      formula: <AreaRect></AreaRect>,
    },
    {
      name: "Area of triangle",
      formula: <AreaRect></AreaRect>,
    },
    {
      name: "Area of triangle",
      formula: <AreaRect></AreaRect>,
    },
    {
      name: "Area of triangle",
      formula: <AreaRect></AreaRect>,
    },
    {
      name: "Area of triangle",
      formula: <AreaRect></AreaRect>,
    },
    {
      name: "Area of triangle",
      formula: <AreaRect></AreaRect>,
    },
    {
      name: "Area of triangle",
      formula: <AreaRect></AreaRect>,
    },
    {
      name: "Area of triangle",
      formula: <AreaRect></AreaRect>,
    },
  ];

  return (
    <div className="searchBar">
      <input
        className="search--input"
        type="text"
        placeholder="Search.."
      ></input>
      <div className="dataResult">
        {listOfFormula.map((value, key) => {
          return (
            <a className="dataItem" href="fb.com">
              <p> {value.name}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
