import React, { useState, useEffect } from 'react';
import Fondo from './images/fondo.jpg';

const Hero = () => {
  // Usar useState para manejar la fuente de la imagen
    const [imgSrc, setImgSrc] = useState('');

  // Utilizar useEffect para establecer la fuente de la imagen cuando el componente se monte
    useEffect(() => {
    setImgSrc(Fondo);
    }, []);

    return (
    <div className='w-full h-screen'>
      {/* Usar la variable de estado imgSrc para la fuente de la imagen */}
        <img className='top-0 left-0 w-full h-screen object-cover' 
        src={imgSrc} 
        alt="/" />
        <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
                <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
                    <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>
                        Abogabot facil uso y ahorra tu valioso tiempo</h1>
                    <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
                        ¿Necesitas ayuda legal? Ponemos nuestra experiencia y conocimiento a tu disposición para proteger tus derechos y conseguir la justicia que mereces.
                    </p>
                    <button className='bg-white text-black '> Comienza con un simple click
                    </button>
                </div>
            </div>
    </div>
    );
};

export default Hero;
