import React, { useState } from 'react';
import menuSvg from './images/menu.svg';


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        console.log('handleNav se ha ejecutado');
        setNav(!nav);
        if (!nav) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'scroll';
        }
    };
    

    return (
        <div className='absolute w-full flex justify-between p-4 items-center'>
            <h1 className='text-white font-bold text-2xl z-20'>Abogabot</h1>
            <img src={menuSvg} alt="/" onClick={handleNav} className='z-20 text-white cursor-pointer' size={25} />
            <div
                className={
                nav
                    ? 'ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10'
                    : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'
                }
            >
                <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
                <li className='font-bold text-3xl p-8'>Inicio</li>
                <li className='font-bold text-3xl p-8'>Acerca de</li>
                <li className='font-bold text-3xl p-8'>Servicios</li>
                <li className='font-bold text-3xl p-8'>Contacto</li>
                <li className='font-bold text-3xl p-8'>Solicitud</li>
                </ul>
            </div>
    </div>
    );
};

export default Navbar;


