import styled from "styled-components";
// import "./Divider.css";

const Divider = (props) => {
  const DividerBox = styled.div`
    height: 30px;
    width: 30px;
    background-color: #f0d8a8;
  `;
  const DividerLine = styled.div`
    height: 30px;
    width: 100%;
    border-top: 1px solid #f0d8a8;
    border-bottom: 1px solid #f0d8a8;
    display: flex;
    justify-content: space-between;
  `;
  return (
    <DividerLine>
      <DividerBox></DividerBox>
      <DividerBox></DividerBox>
    </DividerLine>
  );
};

export default Divider;
