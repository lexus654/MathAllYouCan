import styled from "styled-components";
import bg from "./bg.png";

const Wrapper = styled.div`
  box-sizing: border-box;

  width: 858px;
  height: 548px;
  justify-content: space-between;
  padding: 50px;
  display: flex;
  background: url(${bg});
  border: 1px solid #ffffff;
  box-sizing: border-box;
  box-shadow: -14px 16px 16px rgba(255, 255, 255, 0.1);
  border-radius: 20px;

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

// Components that contains the output of the Logic folder
const Compute = (props) => {
  return (
    <Wrapper>
      <div className="wrapper--content">
        <h1 className="wrapper--content--headings">{props.formula.name}</h1>
        <p className="wrapper--content--text">{props.formula.description}</p>
      </div>
      <div className="wrapper--formula">{props.formula.formula}</div>
    </Wrapper>
  );
};

export default Compute;
