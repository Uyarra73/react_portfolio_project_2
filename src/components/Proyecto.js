import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { trabajos } from '../datos/trabajos';

const Proyecto = () => {

    const [proyecto, setProyecto] = useState({});
    const params = useParams();

    useEffect(() => {
        let proyecto = trabajos.filter(trabajo => trabajo.id === params.id);
        setProyecto(proyecto[0]);
    }, [])

  return (
    <div className='page'>
        <h1 className='heading'>{proyecto.titulo}</h1>
        <div className='mask'>
            <img src={'/images/' + proyecto.id + '.jpeg'} alt={'Foto ' + proyecto.id}/>
        </div>
        <p>{proyecto.descripcion}</p>
    </div>
  )
}

export default Proyecto
