
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Bio } from './pages/Bio';
// import { Nav } from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<Bio />} />
      </Routes>
    </div>
  );
}

export default App;
