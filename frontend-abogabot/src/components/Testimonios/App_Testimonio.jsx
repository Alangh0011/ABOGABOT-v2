import React, { useState, useEffect } from 'react';

const App_Testimonio = (props) => {

    const [imgSrc, setImgSrc] = useState('');

  // Utilizar useEffect para establecer la fuente de la imagen cuando el componente se monte
    useEffect(() => {
    setImgSrc(`./images/persona${props.imagen}.jpg`);
    }, []);

    return (
        <div className='w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto bg-white shadow-lg p-6 mb-8'>
            <img
                className='h-full w-auto'
                src={imgSrc}
                alt={`Testimonio de ${props.nombre}`}
            />
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'>
                    <strong>{props.nombre}</strong> en {props.pais}
                </p>
                <p className='cargo-testimonio'>
                    {props.cargo} en <strong>{props.empresa}</strong>
                </p>
                <p className='texto-testimonio'>"{props.testimonio}"</p>
            </div>
        </div>
    );
};

export default App_Testimonio;


