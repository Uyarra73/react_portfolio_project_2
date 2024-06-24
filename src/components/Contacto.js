import React from 'react'

const Contacto = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Contacto</h1>

      <form className='contact' action='rosellalberto@yahoo.es'>
        <input type='text' placeholder='Nombre' required/>
        <input type='text' placeholder='Apellidos' required/>
        <input type='email' placeholder='Email' required/>
        <textarea placeholder='Mensaje' required></textarea>
        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}

export default Contacto
