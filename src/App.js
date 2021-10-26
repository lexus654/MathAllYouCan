import logo from "./logo.svg";
import "./App.css";
import Divider from "./components/Divider";
import Header from "./components/Header";
function App(props) {
  return (
    <div className="App">
      <Divider></Divider>
      <Header></Header>
      <Divider></Divider>
    </div>
  );
}

export default App;
