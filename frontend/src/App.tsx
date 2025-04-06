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
            <Link to="/raycaster/sdl-min.html">Raycaster Demo</Link>
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
    // Inject inline script
    const inlineScript = document.createElement('script');
    inlineScript.type = 'text/javascript';
    inlineScript.innerHTML = `
      var statusElement = document.getElementById('status');
      var progressElement = document.getElementById('progress');
      var spinnerElement = document.getElementById('spinner');
      var canvasElement = document.getElementById('canvas');
      var outputElement = document.getElementById('output');
      if (outputElement) outputElement.value = '';

      canvasElement.addEventListener('webglcontextlost', (e) => {
        alert('WebGL context lost. You will need to reload the page.');
        e.preventDefault();
      }, false);

      var Module = {
        print: function(...args) {
          console.log(...args);
          if (outputElement) {
            var text = args.join(' ');
            outputElement.value += text + "\\n";
            outputElement.scrollTop = outputElement.scrollHeight;
          }
        },
        canvas: canvasElement,
        setStatus: function(text) {
          Module.setStatus.last = Module.setStatus.last || { time: Date.now(), text: '' };
          if (text === Module.setStatus.last.text) return;
          var m = text.match(/([^(]+)\\((\\d+(\\.\\d+)?)\\/(\\d+)\\)/);
          var now = Date.now();
          if (m && now - Module.setStatus.last.time < 30) return;
          Module.setStatus.last.time = now;
          Module.setStatus.last.text = text;
          if (m) {
            text = m[1];
            progressElement.value = parseInt(m[2])*100;
            progressElement.max = parseInt(m[4])*100;
            progressElement.hidden = false;
            spinnerElement.hidden = false;
          } else {
            progressElement.value = null;
            progressElement.max = null;
            progressElement.hidden = true;
            if (!text) spinnerElement.style.display = 'none';
          }
          statusElement.innerHTML = text;
        },
        totalDependencies: 0,
        monitorRunDependencies: function(left) {
          this.totalDependencies = Math.max(this.totalDependencies, left);
          Module.setStatus(left ? 'Preparing... (' + (this.totalDependencies - left) + '/' + this.totalDependencies + ')' : 'All downloads complete.');
        }
      };
      Module.setStatus('Downloading...');
      window.onerror = function(event) {
        Module.setStatus('Exception thrown, see JavaScript console');
        spinnerElement.style.display = 'none';
        Module.setStatus = function(text) {
          if (text) console.error('[post-exception status] ' + text);
        };
      };
    `;
    document.body.appendChild(inlineScript);

    // Inject external script (ensure sdl-min.js isn't already loaded to avoid duplicate declarations)
    if (!document.getElementById('sdl-script')) {
      const externalScript = document.createElement('script');
      externalScript.type = 'text/javascript';
      externalScript.src = 'sdl-min.js';
      externalScript.async = true;
      externalScript.id = 'sdl-script';
      document.body.appendChild(externalScript);
    }

    // Cleanup on unmount
    return () => {
      document.body.removeChild(inlineScript);
      // Optionally, you might not want to remove the external script if it should persist.
    };
  }, []);

  return (
    <div style={{ margin: '2rem' }}>
      <header>
        <h1>Raycaster Demo</h1>
      </header>
      <main>
        
      </main>
    </div>
  );
};

export default App;
