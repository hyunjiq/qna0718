import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './Qna';
import Gnb from './Gnb3';

import "bootstrap/dist/css/bootstrap.css"
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Gnb></Gnb>
    <App keynm="qna" />
  </React.StrictMode>
);



