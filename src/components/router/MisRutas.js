import React from 'react'
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';
import Inicio from '../Inicio';
import Portafolio from '../Portafolio';
import Servicios from '../Servicios';
import Curriculum from '../Curriculum';
import Contacto from '../Contacto';
import HeaderNav from '../layout/HeaderNav';
import Footer from '../layout/Footer';
import Error from '../Error';


const MisRutas = () => {
  return (
    <BrowserRouter>
        {/* Header y navegacion */}
        <HeaderNav />
           
        {/* Contenido central */}
        <section className="container">
            <Routes>
                <Route path="/" element={<Navigate to='/inicio'/>} />
                <Route path="/inicio" element={<Inicio/>} />
                <Route path="/portafolio" element={<Portafolio />} />
                <Route path="/servicios" element={<Servicios />} />
                <Route path="/curriculum" element={<Curriculum />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </section>

        {/* Footer */}
        <Footer />
    
    </BrowserRouter>
  )
}

export default MisRutas
