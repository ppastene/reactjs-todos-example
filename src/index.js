import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navigation from './components/Navigation';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
