import styled from "styled-components";
import React, { useState } from "react";

const FormulaDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  ::placeholder {
    color: black;
  }
  width: 100px;
  margin-bottom: 10px;
`;
const AreaRectangle = (props) => {
  let lenghtParameter = 0;
  let widthParameter = 0;

  const [lenght, setLenght] = useState("");
  const [width, setWidth] = useState("");
  const [area, setArea] = useState("Answer of Rectangle");
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
      <Input
        onChange={VariableA}
        type="number"
        placeholder="Value of Lenght"
        value={lenght}
      ></Input>
      <Input
        onChange={VariableB}
        type="number"
        placeholder="Value of Width"
        value={width}
      ></Input>
      <button onClick={CalculateArea}>Calculate</button>
      <h1>{area}</h1>
    </FormulaDiv>
  );
};

export default AreaRectangle;
