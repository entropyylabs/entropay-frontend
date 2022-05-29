import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";

import Home from "./pages/Home";
import Button from "./pages/Button";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="button" element={<Button />} />
      </Routes>
    </div>
  );
}

export default App;
