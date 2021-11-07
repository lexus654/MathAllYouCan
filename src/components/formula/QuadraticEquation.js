import styled from "styled-components";
import React, { useState } from "react";

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
const QuadraticEquation = (props) => {
  let valueAParameter = 0;
  let valueBParameter = 0;
  let valueCParameter = 0;

  const [valueA, setValueA] = useState("");
  const [valueB, setValueB] = useState("");
  const [valueC, setValueC] = useState("");
  const [firstRoot, setFirstRoot] = useState("");
  const [secondRoot, setSecondRoot] = useState("");
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
  const CalculateArea = function () {
    setFirstRoot(
      (-valueB + Math.sqrt(valueB * valueB - 4 * valueA * valueC)) /
        (2 * valueA)
    );
    setSecondRoot(
      (-valueB - Math.sqrt(valueB * valueB - 4 * valueA * valueC)) /
        (2 * valueA)
    );
    console.log(firstRoot);
    setValueX(`${firstRoot}, ${secondRoot}`);
  };
  return (
    <FormulaDiv>
      <p>Input Values for a, b and c to find x</p>
      <div className="formula--wrapper">
        <div className="inline">
          <p>a =</p>

          <Input
            onChange={VariableA}
            type="number"
            placeholder="Value of a"
            value={valueA}
          ></Input>
          <p className="marginB">b =</p>
          <Input
            onChange={VariableB}
            type="number"
            placeholder="Value of b"
            value={valueB}
          ></Input>
        </div>
        <div className="inline">
          <p>c =</p>
          <Input
            onChange={VariableC}
            type="number"
            placeholder="Value of c"
            value={valueC}
          ></Input>
        </div>
      </div>
      <button className="Button" onClick={CalculateArea}>
        Calculate
      </button>
      <div className="column">
        <p className="answer"> X = </p>
        <div className="answer--box">
          <p> {valueX}</p>
        </div>
      </div>
    </FormulaDiv>
  );
};

export default QuadraticEquation;
