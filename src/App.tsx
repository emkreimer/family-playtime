import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GameChoice from "./pages/GameChoice";
import Adedonha from "./pages/Adedonha";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GameChoice />} />
        <Route path="/adedonha" element={<Adedonha />} />
      </Routes>
    </Router>
  )
}

export default App;
