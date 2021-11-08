import styled from "styled-components";
import React, { useState } from "react";

// Logic and components for the Area of Rectangle Formula
const FormulaDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 20px;
  & .Button {
    width: 85px;
    height: 30px;
    margin-top: 30px;
    border: 1px solid #000000;
    box-sizing: border-box;
    box-shadow: -2px 3px 6px -1px rgba(255, 255, 255, 0.25);
    border-radius: 10px;
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
const AreaRectangle = (props) => {
  let lenghtParameter = 0;
  let widthParameter = 0;

  const [lenght, setLenght] = useState("");
  const [width, setWidth] = useState("");
  const [area, setArea] = useState("??");
  const VariableA = function (event) {
    setLenght(event.target.value);
    lenghtParameter = lenght;
  };
  const VariableB = function (event) {
    setWidth(event.target.value);
    widthParameter = width;
  };
  const CalculateArea = function () {
    setArea(width * lenght);
  };
  return (
    <FormulaDiv>
      <p>
        Input the value of lenght and width to calculate the area of the
        rectangle
      </p>
      <div className="formula--wrapper">
        <div className="inline">
          <p>Length =</p>
          <Input
            onChange={VariableA}
            type="number"
            placeholder="Value of Lenght"
            value={lenght}
          ></Input>
        </div>
        <div className="inline">
          <p>Width =</p>
          <Input
            onChange={VariableB}
            type="number"
            placeholder="Value of Width"
            value={width}
          ></Input>
        </div>
      </div>
      <button className="Button" onClick={CalculateArea}>
        Calculate
      </button>
      <div className="column">
        <p className="answer"> Area of reactangle = </p>
        <div className="answer--box">
          <p> {area}</p>
        </div>
      </div>
    </FormulaDiv>
  );
};

export default AreaRectangle;
