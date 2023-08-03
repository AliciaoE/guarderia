import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TarifasHorarios from './components/TarifasHorarios';
import ContactaNosotros from './components/ContactaNosotros';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import logo from './assets/logo.png';
import './Styles.css'; // Importa el archivo CSS

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="header-container">
          <div className="logo-container">
            {/* Aplica la clase "logo" al elemento img que contiene el logo */}
            <img src={logo} alt="Logo de la guardería" className="logo" />
          </div>
          <nav>
            <ul className="nav-links">
              {/* Agregar una ruta específica para el componente Inicio */}
              <li>
                <Link to="/inicio">Inicio</Link>
              </li>
              <li>
                <Link to="/tarifas-horarios">Tarifas y horarios</Link>
              </li>
              <li>
                <Link to="/contacta-nosotros">Contacta con nosotros</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>

      <Routes>
        {/* Configurar la ruta para el componente Inicio */}
        <Route path="/guarderia" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/tarifas-horarios" element={<TarifasHorarios />} />
        <Route path="/contacta-nosotros" element={<ContactaNosotros />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
