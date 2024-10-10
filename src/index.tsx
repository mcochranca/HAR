// src/index.tsx

import React from 'react';
import ReactDOM from 'react-dom';
import App from './ui/App';
import './index.css'; // Import Tailwind CSS

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
