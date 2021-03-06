import SideBar from "./components/sidebar/SideBar";
import TopBar from "./components/topbar/TopBar";
import "./app.css"
import Home from "./pages/home/Home";
import "react-router-dom";
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <TopBar/>
    <div className="container">
      <SideBar/>
      <Home/>
      </div>
    </div>
  );
}

export default App;
