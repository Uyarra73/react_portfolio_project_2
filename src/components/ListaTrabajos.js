import React from 'react'
import { Link } from 'react-router-dom'
import { trabajos } from '../datos/trabajos'

const ListaTrabajos = () => {
  return (
    <div>
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

export default ListaTrabajos
