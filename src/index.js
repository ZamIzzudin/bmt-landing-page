import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

