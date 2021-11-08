import styled from "styled-components";
import React, { useState } from "react";
// Logic and components to get the Midpoint of 2 points Formula
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
    justify-content: center;
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
  & .marginB {
    margin-left: 10px;
  }
`;
const Input = styled.input`
  ::placeholder {
    color: black;
    font-size: 10px;
    text-align: center;
  }
  width: 70px;
  height: 20px;
  margin-top: 15px;
  margin-left: 10px;

  & :active {
    outline: none;
    border: solid 2px green;
  }
`;
const Midpoint2Points = (props) => {
  let valueAParameter = 0;
  let valueBParameter = 0;
  let valueCParameter = 0;
  let valueDParameter = 0;

  const [valueA, setValueA] = useState("");
  const [valueB, setValueB] = useState("");
  const [valueC, setValueC] = useState("");
  const [valueD, setValueD] = useState("");

  const [valueX, setValueX] = useState("??");
  const VariableA = function (event) {
    setValueA(event.target.value);
    valueAParameter = valueA;
  };
  const VariableC = function (event) {
    setValueC(event.target.value);
    valueCParameter = valueC;
  };
  const VariableB = function (event) {
    setValueB(event.target.value);
    valueBParameter = valueB;
  };
  const VariableD = function (event) {
    setValueD(event.target.value);
    valueDParameter = valueD;
  };
  const Calculate = function () {
    setValueX(`${(valueA + valueB) / 2} , ${(valueC + valueD) / 2}`);
  };
  return (
    <FormulaDiv>
      <p>
        Input values X1, X2 , Y1 and Y2 to find the slope between the two points
      </p>
      <div className="formula--wrapper">
        <div className="inline">
          <p>X1 =</p>

          <Input
            onChange={VariableA}
            type="number"
            placeholder="Value of X1"
            value={valueA}
          ></Input>
          <p className="marginB">X2 =</p>
          <Input
            onChange={VariableB}
            type="number"
            placeholder="Value of X2"
            value={valueB}
          ></Input>
        </div>
        <div className="inline">
          <p>Y1 =</p>
          <Input
            onChange={VariableC}
            type="number"
            placeholder="Value of Y1"
            value={valueC}
          ></Input>
          <p className="marginB">Y2 =</p>
          <Input
            onChange={VariableD}
            type="number"
            placeholder="Value of Y2"
            value={valueD}
          ></Input>
        </div>
      </div>
      <button className="Button" onClick={Calculate}>
        Calculate
      </button>
      <div className="column">
        <p className="answer"> Midpoint = </p>
        <div className="answer--box">
          <p> {valueX}</p>
        </div>
      </div>
    </FormulaDiv>
  );
};

export default Midpoint2Points;
