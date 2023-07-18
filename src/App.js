import logo from "./logo.svg";
import "./App.css";
import Gallery from "./Components/PortraitComponent";
import { ProfileTitle } from "./Components/PortraitComponent";

function App() {
  return (
    <div className="App">
      <ProfileTitle></ProfileTitle>
      <Gallery></Gallery>
    </div>
  );
}

export default App;
