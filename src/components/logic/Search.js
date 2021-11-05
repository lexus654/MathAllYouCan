import React, { useState } from "react";
import AreaRect from "../formula/AreaRect";
import styled from "styled-components";
import Display from "../dumbComponents/Display";
import AreaTriangle from "../formula/AreaTriangle";
import AreaRectangle from "../formula/AreaRectangle";
import Compute from "./Compute";

const SearchBar = styled.div`
  margin-top: 10px;
  width: 1440px;
  display: flex;
  justify-content: space-around;

  align-items: center;
  position: relative;
  flex-direction: row;
  & .search--input {
    background-color: #d7d6d6;
    width: 533px;
    height: 54px;
    font-size: 27px;
    color: #020202;
    border: solid 1px #d7d6d6;
    border-radius: 20px;
  }

  & ::placeholder {
    color: #020202;
  }

  & .search--input:focus {
    outline-color: #f0d8a8;
  }
`;

const SecondWrapper = styled.div`
  width: 382px;
  height: 548px;
  background-color: #353232;
  border-radius: 20px;
  border: solid 1px white;
  & .dataResult {
    width: 382px;
    height: 548px;

    overflow: hidden;
    overflow-y: auto;
    /* background-color: #d7d6d6; */
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
const BigWrapper = styled.div`
  display: flex;
  flex-direction: column;
  & .WrapperRow {
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
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
    <BigWrapper>
      <SearchBar className="searchBar">
        <img src={require("./math.png").default} height={119} width={119}></img>
        <input
          onChange={handleFilter}
          className="search--input"
          type="text"
          placeholder="Search.."
        ></input>

        <img src={require("./math.png").default} height={119} width={119}></img>
      </SearchBar>
      <div className="WrapperRow">
        <SecondWrapper>
          {filteredData.length != 0 ? (
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
          ) : (
            <div className="dataResult">
              {listOfFormula.map((value, key) => {
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
        </SecondWrapper>
        <Compute formula={formula}></Compute>
      </div>
    </BigWrapper>
  );
};

export default Search;
