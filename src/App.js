import logo from "./logo.svg";
import "./App.css";
import Divider from "./components/Divider";
import Header from "./components/Header";
import Search from "./components/Search";
import Formula from "./components/formula/Formula";
function App(props) {
  return (
    <div className="App">
      <Divider></Divider>
      <Header></Header>
      <Divider></Divider>
      <Search />
      <Formula></Formula>
    </div>
  );
}

export default App;
