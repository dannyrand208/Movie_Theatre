import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppContainer from './Components/AppContainer';

document.body.innerHTML = '<div id="root"></div>';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContainer/>
  </React.StrictMode>
);
