import React from 'react';
import logo from './holberton_logo.jpg'; // Assuming the logo image file is in the same directory
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holbertonlogo} className="App-logo" alt="Holberton Logo" />
        <h1>School Dashboard</h1>
      </header>

      <body className="App-body">
        <p>Login to access the full dashboard</p>
      </body>

      <footer className="App-footer">
        <p>Copyright 2024 - Holberton School</p>
      </footer>
    </div>
  );
}

export default App;
