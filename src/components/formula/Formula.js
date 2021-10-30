import AreaRect from "./AreaRect";

const Formula = function () {
  const listOfFormula = [
    {
      name: "Area of Rectangle",
      formula: <AreaRect></AreaRect>,
    },
    {
      name: "Area of Square",
      formula: <AreaRect></AreaRect>,
    },
    {
      name: "Area of triangle",
      formula: <AreaRect></AreaRect>,
    },
  ];

  const value = listOfFormula.map((element, key) => {
    return <div className="inline">{element.name}</div>;
  });
  return <div>{value}</div>;
};
export default Formula;
