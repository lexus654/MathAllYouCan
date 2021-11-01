import "./Search.css";
import React, { useState } from "react";
import AreaRect from "../formula/AreaRect";
import styled from "styled-components";
import Display from "../dumbComponents/Display";

const Search = (props) => {
  const wrapper = styled.div`
    border: solid 1px white;
    height: 548px;
    width: 858px;
  `;
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
      name: "Area of 1",
      formula: <AreaRect></AreaRect>,
    },
    {
      name: "Area of 2",
      formula: <AreaRect></AreaRect>,
    },
    {
      name: "Area of 3",
      formula: <AreaRect></AreaRect>,
    },
    {
      name: "Area of 4",
      formula: <AreaRect></AreaRect>,
    },
    {
      name: "Area of 1343",
      formula: <AreaRect></AreaRect>,
    },
    {
      name: "Area of 234234",
      formula: <AreaRect></AreaRect>,
    },
    {
      name: "Area of t1231",
      formula: <AreaRect></AreaRect>,
    },
    {
      name: "Area of 535",
      formula: <AreaRect></AreaRect>,
    },
    {
      name: "Area of t23123",
      formula: <AreaRect></AreaRect>,
    },
    {
      name: "Area of t4636",
      formula: <AreaRect></AreaRect>,
    },
  ];
  let [formula, setFormula] = useState(listOfFormula[2].name);
  const [filteredData, setFilteredData] = useState([]);
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = listOfFormula.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    setFilteredData(newFilter);
  };
  return (
    <div className="searchBar">
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
                  setFormula(listOfFormula[`${key}`].name);
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
      <div className={{ wrapper }}>
        <div className="wrapper--content">
          <h1 className="wrapper--content--headings">PythagoreanA</h1>
          <p className="wrapper--content--text">
            Hello this is testing for the formula Itself
          </p>
        </div>
        <div className="wrapper--formula">
          <Display formula={formula}></Display>
        </div>
      </div>
    </div>
  );
};

export default Search;
