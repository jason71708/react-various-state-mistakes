import React from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import CleanEffectDemo from './pages/CleanEffectDemo';
import SequentialUploadDemo from './pages/SequentialUploadDemo';
import MultipleSetStateDemo from './pages/MultipleSetStateDemo';

const routes = [
  {
    label: 'Clean Effect Demo',
    to: '/'
  },
  {
    label: 'Sequential Upload Demo',
    to: '/sequential-upload-demo'
  },
  {
    label: 'Multiple SetState Demo',
    to: '/multiple-set-state-demo'
  },
]

function App() {
  return (
    <>
      <nav className='menu'>
        <ul className='menu__list'>
          {routes.map(route => (
            <li key={route.to} className='menu__list__item'>
              <Link to={route.to}>{route.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <p>See console log to find different in these two component.</p>
      <Routes>
        <Route path="/" element={<CleanEffectDemo />} />
        <Route path="sequential-upload-demo" element={<SequentialUploadDemo />} />
        <Route path="multiple-set-state-demo" element={<MultipleSetStateDemo />} />
        <Route path="/*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
