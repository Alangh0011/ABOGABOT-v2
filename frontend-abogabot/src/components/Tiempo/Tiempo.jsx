import React, { useState, useEffect } from 'react';
import maso from './images/maso.jpg';

const Tiempo = () => {
    // Usar useState para manejar la fuente de la imagen
    const [imgSrc, setImgSrc] = useState('');

    // Utilizar useEffect para establecer la fuente de la imagen cuando el componente se monte
    useEffect(() => {
        setImgSrc(maso);
    }, []);

    return (
        <div className="my-5 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-4">
            <div className="md:flex">
                {/* Imagen en el lado izquierdo para dispositivos grandes */}
                <div className="md:w-1/2">
                    <img className="h-48 w-full object-cover md:h-full" src={imgSrc} alt=""/>
                </div>
                {/* Texto en el lado derecho para dispositivos grandes */}
                <div className="md:w-1/2 p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
                    <a href="#" 
                    className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                        Incredible accommodation for your team
                    </a>
                    <p className="mt-2 text-slate-500">
                        Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Tiempo;

