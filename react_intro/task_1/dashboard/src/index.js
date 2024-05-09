import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Notifications from './Notifications'; // Import the Notifications component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Render the Notifications component in a separate div
ReactDOM.render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>,
  document.getElementById('root-notifications')
);
