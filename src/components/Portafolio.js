import React from 'react'
import { trabajos } from '../datos/trabajos'
import { Link } from 'react-router-dom'

const Portafolio = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Portafolio</h1>
      <section className='trabajos'>
        {
          trabajos.map(trabajo => {
            return(
              <section className='trabajo' key={trabajo.id}>
                
                  <h2>{trabajo.titulo}</h2>
                  <div className='mask'>
                    <img src={'/images/' + trabajo.id + '.jpeg'} alt={'Foto ' + trabajo.id}/>
                  </div>
                  <p>{trabajo.descripcion}</p>
                  <h3><Link to={'/proyecto/' + trabajo.id}>Ver trabajo</Link></h3>
                
              </section>
            )
          })
        }
      </section>
    </div>
  )
}

export default Portafolio
