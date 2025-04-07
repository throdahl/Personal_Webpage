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
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding: '1rem',
        backgroundColor: '#f0f0f0',
        zIndex: 1000
      }}>
        <ul style={{ display: 'flex', listStyleType: 'none', gap: '1rem', margin: 0 }}>
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/about">About Me</Link>
          </li>
          <li>
            <Link to="/demo">Raycaster Demo</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="https://github.com/throdahl/Personal_Webpage.git">github</Link>
          </li>
          <li>
            <Link to="https://linkedin.com/in/jack-throdahl">LinkedIn</Link>
          </li>
        </ul>
      </nav>

      {/* Main content area */}
      <div style={{ marginTop: '100px' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path='/demo' element={<Demo />} />
      </Routes>
      </div>
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
          This is a simple React application I created and hosted on a raspberry pi.
           I used TypeScript and React for the front end.
           For the backend I used Python, Flask, and mySQL.
           The demo I provied is a simple C++ raycasting engine that I created using only SDL3 and the standard library.
           I then compiled it into webassembly using emscripten and added it to this webpage.
           All code can be found at the github repository linked above.
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

const Resume: React.FC = () => {
  return (
    <div style={{ margin: '2rem' }}>
      <header>
        <h1>Resume</h1>
      </header>
      <main>
        <div style = {{
          display: 'flex',
          justifyContent: 'center'}}>
            <embed src="/resume.pdf" type="application/pdf" width="75%" height="700px" />
          </div>
      </main>
    </div>
  );
};

const Demo: React.FC = () => {
  useEffect(() => {
    // When Demo mounts, get the canvas and display it.
    const canvasElement = document.getElementById('canvas');
    if (canvasElement) {
      window.Module.canvas = canvasElement;
      canvasElement.style.display = 'block';
    }
    // When Demo unmounts, hide the canvas.
    return () => {
      if (canvasElement) {
        canvasElement.style.display = 'none';
      }
    };
  }, []);

  return (
    <div style={{ margin: '2rem' }}>
      <header>
        <h1>Raycaster Demo</h1>
      </header>
      <main>
        {/* Spinner and Status */}
        <div className="spinner" id="spinner"></div>
        <div className="emscripten" id="status">Downloading...</div>
        
        {/* Controls */}
        <span id="controls">
          <span>
            <input type="checkbox" id="resize" /> Resize canvas
          </span>
          <span>
            <input type="checkbox" id="pointerLock" defaultChecked /> Lock/hide mouse pointer&nbsp;&nbsp;&nbsp;
          </span>
          <span>
            <input 
              type="button" 
              value="Fullscreen" 
              onClick={() => {
                if (window.Module && window.Module.requestFullscreen) {
                  window.Module.requestFullscreen();
                }
              }} 
            />
          </span>
        </span>
        
        {/* Progress Bar */}
        <div className="emscripten">
          <progress value="0" max="100" id="progress" hidden={true}></progress>
        </div>
        
        {/* The canvas element is pre-rendered in index.html */}
        {/* Output Textarea */}
        <textarea id="output" rows={8}></textarea>
      </main>
    </div>
  );
};

export default App;
