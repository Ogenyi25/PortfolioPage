import './App.css';
import Fade from "react-reveal/Fade";
import { Parallax } from 'react-parallax';
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from "react-particles-js";

//components import
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/about/About';
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
          <Parallax
            blur={{ min: -30, max: 30 }}
            bgImage={require("./images/parallax.jpg")}
            bgImageAlt=""
            strength={-200}
          >
            <div>
              <Container className="container-box rounded">
                <Fade duration={500}>
                  <About />
                </Fade>
              </Container>
            </div>
          </Parallax>
        </div>
      </>
    </div>
  );
}

export default App;
