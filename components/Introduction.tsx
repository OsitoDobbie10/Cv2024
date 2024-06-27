"use client";
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import Imagen1 from '@/public/gis.png';
import Link from 'next/link';
const Introduction = () => {
  const sendMessage = ()=>{
    const Telefono = "95348921"
    const url = `https://api.whatsapp.com/send?phone=504${Telefono}&text=
      *Asunto Consulta por mis servicios profesionales*%0A
      *Consulto Informacion*%0A`;
      window.open(url); 
  };
  return (
    <div className='z-20 w-full bg-darkbg/60'>
    <div className="z-20 flex flex-col items-center justify-center gap-1 h-full p-8 py-20 md:py-0">
    <Image src={Imagen1} priority width="400" height="350" alt='Profile Gis' />
    <div className="flex flex-col justify-center max-w-md">
     <h2 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
     GIS, <br />
    <TypeAnimation 
    sequence={[
        "Desarrollo web",
        2000,
        "Analisis de datos",
        2000,
        "Base de datos",
        2000]}
    wrapper='span'
    speed={50}
    repeat={Infinity}
    className='font-bold text-secondary'
    />            
    </h2>
   <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8">
    Como experto en ciencas y tecnologia de la informacion geografica me especializo en el analisis de datos espaciales y desarrollo de aplicaciones
    enfocadas a la experiencia del usuario.
   </p>
   <div className="flex items-center justify-center gap-3 md:justify-start">
    <Link href='/portafolio' 
    className='px-3 py-2 transition-all border-2 cursor-pointer w-fit rounded-xl hover:shadow-xl hover:shadow-secondary/50 text-secondary border-secondary'>
    ver proyectos
    </Link>
    <button onClick={sendMessage} className='px-3 py-2 transition-all border-2 cursor-pointer w-fit rounded-xl hover:shadow-xl hover:shadow-white/50'>
    Contacta conmigo
    </button>
   </div>
    </div>
    </div>
    </div>
  )
}

export default Introduction;
