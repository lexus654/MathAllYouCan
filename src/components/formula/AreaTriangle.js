import styled from "styled-components";
import React, { useState } from "react";
// Logic and components for the Area of Triangle Formula
const FormulaDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 20px;
  & .Button {
    width: 85px;
    height: 30px;

    border: 1px solid #000000;
    box-sizing: border-box;
    box-shadow: -2px 3px 6px -1px rgba(255, 255, 255, 0.25);
    border-radius: 10px;
    margin-top: 30px;
  }
  & .Button:hover {
    background-color: #fdfdfd;
  }
  & .Button:active {
    background-color: wheat;
  }

  align-items: center;
  & p {
    color: white;
    font-size: 16px;
    text-align: center;
  }

  & .formula--wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  & .inline {
    display: flex;
    flex-direction: row;
  }
  & .column {
    display: flex;

    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  & .answer {
    color: white;

    font-size: 18px;
  }
  & .answer--box {
    /* Rectangle 64 */
    width: 142px;
    height: 47px;
    background: #ffffff;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 10px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    & p {
      color: black;
      text-align: center;
      font-size: 20px;
    }
  }
`;
const Input = styled.input`
  ::placeholder {
    color: black;
    font-size: 10px;
    text-align: center;
  }
  width: 100px;
  height: 20px;
  margin-top: 15px;
  margin-left: 10px;

  & :active {
    outline: none;
    border: solid 2px green;
  }
`;
const AreaTriangle = (props) => {
  let baseParameter = 0;
  let heightParameter = 0;

  const [base, setBase] = useState("");
  const [height, setHeight] = useState("");
  const [area, setArea] = useState("??");
  const VariableA = function (event) {
    setBase(event.target.value);
    baseParameter = base;
  };
  const VariableB = function (event) {
    setHeight(event.target.value);
    heightParameter = height;
  };
  const CalculateArea = function () {
    setArea(height * base);
  };
  return (
    <FormulaDiv>
      <p>
        Input the value of base and height to calculate the area of the triangle
      </p>
      <div className="formula--wrapper">
        <div className="inline">
          <p>Base =</p>
          <Input
            onChange={VariableA}
            type="number"
            placeholder="Value of Base"
            value={base}
          ></Input>
        </div>
        <div className="inline">
          <p>Height =</p>
          <Input
            onChange={VariableB}
            type="number"
            placeholder="Value of Height"
            value={height}
          ></Input>
        </div>
      </div>
      <button className="Button" onClick={CalculateArea}>
        Calculate
      </button>
      <div className="column">
        <p className="answer"> Area of triangle = </p>
        <div className="answer--box">
          <p> {area}</p>
        </div>
      </div>
    </FormulaDiv>
  );
};

export default AreaTriangle;
