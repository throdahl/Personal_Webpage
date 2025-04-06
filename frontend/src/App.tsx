import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

interface DataObject {
  members: string[];
}

function App() {

  const [data, setData] = useState<DataObject | null>(null); // Initialize state to hold the data from the backend

  useEffect(() => {
    // fetch data from the backend
    fetch('/api')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        console.log(data); // log the data to the console for debugging
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <Router>
      {/* Nav bar at the top */}
      <nav style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
        <ul style={{ display: 'flex', listStyleType: 'none', gap: '1rem' }}>
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/about">About Me</Link>
          </li>
          <li>
            <Link to="/demo">Demo</Link>
          </li>
        </ul>
      </nav>

      {/* Main content area */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/demo" element={<About />} />
      </Routes>
    </Router>
  );
};

const Home: React.FC = () => {
  return (
    <div>
      <header>
      <h1 style={{ margin: '2rem' }}>Hello, welcome to my page.</h1>
      </header>
      <main>
        <p>
          This is a simple React application I created. I used TypeScript and React for the front end. For the backend I used Python, Flask, and mySQL. The demo I provied in a simple C++ raycasting engine that I created using only SDL3. I then compiled it into webassembly and added it to this webpage. All code can be found at the github repository linked above.
        </p>
      </main>
      
    </div>
    
  );
};

const About: React.FC = () => {
  return (
    <div style={{ margin: '2rem' }}>
      <header>
        <h1>About Me</h1>
      </header>
    </div>
  );
};

export default App;
