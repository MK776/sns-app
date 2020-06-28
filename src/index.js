import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import App from 'App';
import { ContextProvdider } from 'Context';
import 'style.css';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvdider>
      <Router>
        <App />
      </Router>
    </ContextProvdider>
  </React.StrictMode>,
  document.getElementById('root')
);