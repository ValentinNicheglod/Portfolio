import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './i18nextConf';
import './index.css';

ReactDOM.render(
  <Suspense fallback="...">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root'),
);
