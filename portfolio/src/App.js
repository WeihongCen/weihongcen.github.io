import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Airstrafe from './pages/Airstrafe';
import JPL from './pages/JPL';
import Games from './pages/Games';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/airstrafe" element={<Airstrafe />} />
        <Route path="/portfolio/JPL" element={<JPL />} />
        <Route path="/portfolio/games" element={<Games />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <ScrollToTop />
    </>
  );
}

export default App;
