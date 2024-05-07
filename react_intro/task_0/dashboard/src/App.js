import './App.css;
import logo from './holberton-logo.jpg'; // Assuming the logo image file is in the same directory
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Holberton Logo" />
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

