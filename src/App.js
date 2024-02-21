import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

import Home from "./pages/Home";
import Particle from "./components/Particle";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <Particle />
      <Menu />
      <div className="absolute w-full top-0 left-0">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
