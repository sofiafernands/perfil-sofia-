import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Sofia Fernandes</h1>
        <p className="App-subtitle">Desarrolladora Web Full-Stack</p>
      </header>

      <section className="Skills">
        <h2>Habilidades</h2>
        <ul>
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Tailwind</li>
          <li>Python</li>
          <li>Bootstrap</li>
          <li>Git</li>
        </ul>
      </section>

      <section className="Projects">
     

      <div className="Project">
          <h3>HOMYO</h3>
          <p>Descripción del proyecto.</p>
        </div>

        <div className="Project">
          <h3>DAVIDRIPHONES</h3>
          <p>Descripción del proyecto.</p>
        </div>

        <div className="Project">
          <h3>MY CHECK LIST</h3>
          <p>Descripción del proyecto.</p>
        </div>

        <div className="Project">
          <h3>API STARWARS</h3>
          <p>Descripción del proyecto.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
