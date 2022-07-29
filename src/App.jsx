import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import CleanEffectDemo from './pages/CleanEffectDemo';
import SequentialUploadDemo from './pages/SequentialUploadDemo';
import MultipleSetStateDemo from './pages/MultipleSetStateDemo';

function App() {
  return (
    <div>
      <nav>
        Demo Links
        <ul>
          <li>
            <Link to="/">Clean Effect Demo</Link>
          </li>
          <li>
            <Link to="/sequential-upload-demo">Sequential Upload Demo</Link>
          </li>
          <li>
            <Link to="/multiple-set-state-demo">Multiple SetState Demo</Link>
          </li>
        </ul>
      </nav>
      <p>See console log to find different in these two component.</p>
      <Routes>
        <Route path="/" element={<CleanEffectDemo />} />
        <Route path="sequential-upload-demo" element={<SequentialUploadDemo />} />
        <Route path="multiple-set-state-demo" element={<MultipleSetStateDemo />} />
        <Route path="/*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;