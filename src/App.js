import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import StateReference from './pages/StateReferenceDemo';

function App() {
  

  return (
    <div>
      <nav>
        <Link to="/">StateReference Demo</Link>
        {/* <Link to="/about">About</Link> */}
      </nav>
      <Routes>
        <Route path="/" element={<StateReference />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
