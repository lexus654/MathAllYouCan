import styled from "styled-components";

const Wrapper = styled.div`
  box-sizing: border-box;
  border: solid 4px white;
  height: 548px;
  width: 858px;
  display: flex;
  justify-content: space-between;
  border-radius: 20px;
  padding: 50px;
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
