import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GameChoice from "./pages/GameChoice";
import Adedonha from "./pages/Adedonha";
import WhoAmI from './pages/WhoAmI';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GameChoice />} />
        <Route path="/adedonha" element={<Adedonha />} />
        <Route path="/quem-sou-eu" element={<WhoAmI />} />
      </Routes>
    </Router>
  )
}

export default App;
