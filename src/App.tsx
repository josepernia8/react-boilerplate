import React from 'react';
import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Other from './pages/Other';

function App() {
  const [darkToggle, setDarkToggle] = React.useState(false)

  return (
    <div className={`p-5 ${darkToggle && 'dark'}`}>
      <label className="toggleDarkBtn">
        <input type="checkbox" onClick={() => setDarkToggle(!darkToggle)} />
        <span className="slideBtnTg round" />
      </label>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="other" element={<Other />} />
      </Routes>
    </div>
  );
}

export default App;
