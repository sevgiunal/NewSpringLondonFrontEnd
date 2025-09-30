import react from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import GetAQuote from './components/pages/GetAQuote';
import Build from './components/pages/Build';
import About from './components/pages/About';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/getaquote" element={<GetAQuote />} />
        <Route path="/buildhouses" element={<Build />} />
        <Route path="/aboutus" element={<About />} />
      </Routes>
      <Footer />
    </Router>

      

    </>
  );
}

export default App;
