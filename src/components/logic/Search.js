import React, { useState } from "react";
import AreaRect from "../formula/AreaRect";
import styled from "styled-components";
import Display from "../dumbComponents/Display";
import AreaTriangle from "../formula/AreaTriangle";
import AreaRectangle from "../formula/AreaRectangle";
const Wrapper = styled.div`
  box-sizing: border-box;
  border: solid 4px white;
  height: 548px;
  width: 858px;
  display: flex;
  justify-content: space-between;
  border-radius: 20px;
  padding: 50px;
  & .wrapper--formula {
    width: 283px;
    height: 425px;
    border-radius: 22px;
    border: solid white 1px;
  }
  & .wrapper--content {
    display: flex;
    flex-direction: column;
    width: 365px;

    & .wrapper--content--headings {
      color: white;
      font-size: 35px;
    }
    & .wrapper--content--text {
      color: white;
      text-align: justify;
    }
  }
`;

const SearchBar = styled.div`
  margin-top: 10px;
  width: 1440px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;

  & .search--input {
    background-color: #7e7c7c;
    width: 533px;
    height: 54px;
    font-size: 27px;
    color: white;
  }

  & ::placeholder {
    color: white;
  }

  & .search--input:focus {
    outline-color: #f0d8a8;
  }

  & .dataResult {
    width: 533px;
    height: 334px;

    overflow: hidden;
    overflow-y: auto;
    background-color: white;
  }

  & .dataResult .dataItem {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
  }

  & .dataItem {
    margin-left: 10px;
  }
  & a {
    text-decoration: none;
  }
  & a:hover {
    background-color: lightblue;
  }
`;
const Search = (props) => {
  const listOfFormula = [
    {
      name: "Area of Rectangle",
      description:
        "The area of a rectangle (A) is the product of its length 'a' and width or breadth 'b'. So, Area of Rectangle = (a × b) square units.",
      formula: <AreaRectangle></AreaRectangle>,
    },
    {
      name: "Area of Triangle",
      description:
        "To calculate the area of a triangle, multiply the height by the width (this is also known as the 'base') then divide by 2.",
      formula: <AreaTriangle></AreaTriangle>,
    },
  ];
  let [formula, setFormula] = useState(listOfFormula[0]);
  const [filteredData, setFilteredData] = useState([]);
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = listOfFormula.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    setFilteredData(newFilter);
  };
  return (
    <SearchBar className="searchBar">
      <input
        onChange={handleFilter}
        className="search--input"
        type="text"
        placeholder="Search.."
      ></input>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.map((value, key) => {
            return (
              <a
                onClick={function () {
                  setFormula(listOfFormula[`${key}`]);
                  filteredData.length = 0;
                }}
                className="dataItem"
                href="#"
              >
                <p> {value.name}</p>
              </a>
            );
          })}
        </div>
      )}
      <Wrapper>
        <div className="wrapper--content">
          <h1 className="wrapper--content--headings">{formula.name}</h1>
          <p className="wrapper--content--text">{formula.description}</p>
        </div>
        <div className="wrapper--formula">{formula.formula}</div>
      </Wrapper>
    </SearchBar>
  );
};

export default Search;
