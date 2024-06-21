import React from 'react'
import { Link } from 'react-router-dom'

const Inicio = () => {
  return (
    <div>
      <h1>Hola! Soy Alberto Rosell y soy desarrollador Web</h1>
      <br/>
      <h2>Te ayudo a desarrolladar to proyecto web desde cero. <Link to='/contacto'>Contacta conmigo!</Link></h2>
      <br/>
      <section className='last-works'>
        <h2>Algunos de mis proyectos</h2>
        <p>Echale un vistazo a algunos de mis trabajos:</p>
        <div className='works'></div>
      </section>
    </div>
  )
}

export default Inicio
