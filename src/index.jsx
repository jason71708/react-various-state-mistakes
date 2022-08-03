import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './normalize.css'
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={
      process.env.NODE_ENV === 'production' ?
      process.env.REACT_APP_GITHUB_PAGE_PATH :
      '/'
    }>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
