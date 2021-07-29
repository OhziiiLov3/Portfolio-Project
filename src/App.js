
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services"
import Experience from "./components/Experience";

function App() {
  return (
    <>
    <Navbar />
    <Header />
    <About />
    <Services />
    <Experience />
    </>
  ); 
}

export default App;
