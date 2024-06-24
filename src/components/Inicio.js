import React from 'react'
import { Link } from 'react-router-dom'
import ListaTrabajos from './ListaTrabajos'

const Inicio = () => {
  return (
    <div className='home'>

      <h1>Hola! Soy Alberto Rosell y <br/>soy <strong>desarrollador Web</strong></h1>
      <br/>
      <h2>Te ayudo a desarrolladar to proyecto web desde cero. <Link to='/contacto'>Contacta conmigo</Link></h2>
      <br/>
      <section className='last-works'>
        <h2 className='heading'>Algunos de mis proyectos</h2>
        <p>Echale un vistazo a algunos de mis trabajos:</p>
        <ListaTrabajos/>
      </section>
    </div>
  )
}

export default Inicio
