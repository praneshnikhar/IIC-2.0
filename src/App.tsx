
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ambassador from './pages/Ambassador';
import Home from './pages/Home';
import Sponsors from './pages/Sponsors';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/Ambassador" element={<Ambassador />} />
      </Routes>
    </Router>
  );
}

export default App;