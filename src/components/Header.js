import "./Header.css";

const Header = (props) => {
  return (
    <div className="wrapper">
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
    </div>
  );
};

export default Header;
