import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './Qna';

import "bootstrap/dist/css/bootstrap.css"
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App keynm="qna" />
  </React.StrictMode>
);



