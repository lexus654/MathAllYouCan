import React, { useState } from "react";
import QuadraticEquation from "../formula/QuadraticEquation";
import styled from "styled-components";
import ArithmeticMean from "../formula/ArithmeticMean";
import AreaTriangle from "../formula/AreaTriangle";
import AreaRectangle from "../formula/AreaRectangle";
import Compute from "./Compute";
import FilteredList from "./FilteredList";
import Distance2Points from "../formula/Distance2Point";
import Slope2Points from "../formula/Slope2Points";
// Style for the search bar
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
// Big wrapper Styles
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
// JSX code for the search, it icludes the filter method and change of display
const Search = (props) => {
  // Object containing all of the formula as well as their own definition
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
    {
      name: "Arithmetic Mean",
      description:
        "The mean, or average, is calculated by adding up the scores and dividing the total by the number of scores",
      formula: <ArithmeticMean></ArithmeticMean>,
    },
    {
      name: "Quadratic Equations",
      description:
        "The standard form of a quadratic equation is ax2 + bx + c = 0, where a, b are the coefficients, x is the variable, and c is the constant term. The first condition for an equation to be a quadratic equation is the coefficient of x2 is a non-zero term(a ≠0).",
      formula: <QuadraticEquation></QuadraticEquation>,
    },
    {
      name: "Distance of Two Points",
      description:
        "Distance between two points P(x1,y1) and Q(x2,y2) is given by: d(P, Q) = √ (x2 − x1)2 + (y2 − y1)2 {Distance formula} 2. Distance of a point P(x, y) from the origin is given by d(0,P) = √ x2 + y2.",
      formula: <Distance2Points></Distance2Points>,
    },
    {
      name: "Slope of Two Points",
      description:
        "Use the slope formula to find the slope of a line given the coordinates of two points on the line. The slope formula is m=(y2-y1)/(x2-x1), or the change in the y values over the change in the x values. The coordinates of the first point represent x1 and y1. The coordinates of the second points are x2, y2.",
      formula: <Slope2Points></Slope2Points>,
    },
  ];
  // state for changing of the formula in the display
  let [formula, setFormula] = useState(listOfFormula[0]);
  // state for the filtering of data that will be display on the search
  const [filteredData, setFilteredData] = useState([]);
  // event for filtering the data base on the user input
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = listOfFormula.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    setFilteredData(newFilter);
  };
  // Start of JSX code
  return (
    // Big wrapper is the Main container
    <BigWrapper>
      {/* SearchBar includes the input and image for design purposes */}
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
      {/* middle section of the page contains the filtered list of formula and the computational div */}
      <div className="WrapperRow">
        {/* div of filtered list of formula */}
        <FilteredList
          filteredData={filteredData}
          listOfFormula={listOfFormula}
          setFormula={setFormula}
        ></FilteredList>
        {/* div for the computational */}
        <Compute formula={formula}></Compute>
      </div>
    </BigWrapper>
  );
};

export default Search;
