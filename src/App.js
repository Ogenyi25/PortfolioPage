import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from "react-particles-js";

//components import
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/about/About';
import Skills from './components/skills/Skills';



function App() {
  return (
    <div className="App">
      <>
        <Particles
          params={{
            particles: {
              number: {
                value: 30,
                density: {
                  enable: true,
                  value_area: 900
                }
              },
              shape: {
                type: "star",
                stroke: {
                  width: 4,
                  color: "#f9ab00"
                }
              }
            }
          }}
        />
        <Navbar />
        <Header />
        <div>
          <About />
        </div>
        <div>
          {/* skills section */}
          <Skills />
        </div>
      </>
    </div>
  );
}

export default App;
