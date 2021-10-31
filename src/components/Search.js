import "./Search.css";
import React, { useState } from "react";
import Formula from "./formula/Formula";
import AreaRect from "../components/formula/AreaRect";
import styled from "styled-components";
import Display from "./Display";

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
            <a
              onClick={function () {
                setFormula(listOfFormula[`${key}`].name);
              }}
              className="dataItem"
              href="#"
            >
              <p> {value.name}</p>
            </a>
          );
        })}
      </div>
      <Display formula={formula}></Display>
    </div>
  );
};

export default Search;
