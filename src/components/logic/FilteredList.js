import styled from "styled-components";
import Search from "./Search";
// styles of the Second Wrapper
const SecondWrapper = styled.div`
  width: 382px;
  height: 548px;
  background-color: #353232;
  border-radius: 20px;
  border: solid 1px white;
  box-shadow: -14px 16px 16px rgba(255, 255, 255, 0.1);

  & .dataResult {
    width: 382px;
    height: 548px;

    overflow: hidden;
    overflow-y: auto;
    /* background-color: #d7d6d6; */
  }

  & .dataResult .dataItem {
    width: 342px;
    height: 50px;
    display: flex;
    align-items: center;
  }

  & .dataItem {
    border-bottom: 1px solid #f0d8a8;
    margin-left: 20px;
  }
  & a {
    text-decoration: none;
    color: white;
    font-size: 18px;
    padding-left: 20px;
  }
  & a:hover {
    color: #f0d8a8;
  }
  & .header {
    color: white;
    text-align: center;
  }
`;
const FilteredList = (props) => {
  return (
    <SecondWrapper>
      <h1 className="header">List of Formulas</h1>
      {/* ternary operator that change the display on the filtered list div  */}
      {props.filteredData.length != 0 ? (
        <div className="dataResult">
          {/* returns a map from the filtered data state */}
          {props.filteredData.map((value, key) => {
            return (
              <a
                onF
                onClick={function () {
                  props.setFormula(props.listOfFormula[`${key}`]);
                  props.filteredData.length = 0;
                }}
                className="dataItem"
                href="#"
              >
                <p> {value.name}</p>
              </a>
            );
          })}
        </div>
      ) : (
        <div className="dataResult">
          {/* returns a map from the list of formula */}
          {props.listOfFormula.map((value, key) => {
            return (
              <a
                onClick={function () {
                  props.setFormula(props.listOfFormula[`${key}`]);
                  props.filteredData.length = 0;
                }}
                className="dataItem"
                href="#"
              >
                <p> {value.name}</p>
              </a>
            );
          })}
        </div>
      )}
    </SecondWrapper>
  );
};

export default FilteredList;
