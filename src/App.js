
import './App.css';
import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { Bio } from './pages/Bio';

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    document.body.classList.toggle('home-page', isHome);

    return () => {
      document.body.classList.remove('home-page');
    };
  }, [isHome]);

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
