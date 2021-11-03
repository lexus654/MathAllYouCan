import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
  justify-content: space-around;
  align-items: center;

  /* Rectangle 52 */

  width: 1439px;
  height: 142px;
  left: 0px;
  top: 30px;

  background: linear-gradient(
    270.52deg,
    #353232 41.7%,
    #7e7d7c 90.63%,
    #353232 100%
  );

  & li {
    list-style-type: none;
    color: white;
    margin: 0 28px;
    font-size: 27px;
  }
  & ul {
    display: flex;
  }
`;
const Header = (props) => {
  return (
    <Wrapper>
      <div className="header--logo">
        <img
          src={require("./logo.png").default}
          height={181.5}
          width={759}
        ></img>
      </div>
      <div className="header--list">
        <ul>
          <li>Formula</li>
          <li>About</li>
          <li>Creator</li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default Header;
