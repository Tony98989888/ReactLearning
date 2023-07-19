import logo from "./logo.svg";
import "./App.css";
import Gallery from "./Components/PortraitComponent";
import { ProfileTitle } from "./Components/PortraitComponent";
import PortraitGallery from "./Components/StateComponent";

function App() {
  return (
    <div className="App">
      <ProfileTitle></ProfileTitle>
      <Gallery></Gallery>
      <PortraitGallery></PortraitGallery>
    </div>
  );
}

export default App;
