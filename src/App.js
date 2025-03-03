import "./App.css";
import MainDash from "./components/main-section/MainDash";
import RightSide from "./components/right-side/right-side";
import Sidebar from "./components/sidebar/sidebar";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDash />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
