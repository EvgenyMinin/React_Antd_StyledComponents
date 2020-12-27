import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import App from './components/App';
import reportWebVitals from './root/reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
