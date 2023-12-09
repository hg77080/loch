import logo from "./logo.svg";
import "./App.css";
import { LeftComponent } from "./components/LeftComponent";
import { RightComponent } from "./components/RightComponent";

function App() {
  return (
    <div className="App">
      <LeftComponent />
      <RightComponent />
    </div>
  );
}

export default App;
