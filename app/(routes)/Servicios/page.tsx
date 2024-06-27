"use client";
import AvatarServices from '@/components/AvatarServices';
import CircleImage from '@/components/CircleImage';
import SliderServices from '@/components/SliderServices';
import TransitionPages from '@/components/TransitionPages';
const page = () => {
    const sendMessage = ()=>{
        const Telefono = "95348921"
        const url = `https://api.whatsapp.com/send?phone=504${Telefono}&text=
          *Asunto Consulta por mis servicios profesionales*%0A
          *Consulto Informacion*%0A`;
          window.open(url); 
      };
  return (
    <>
    <TransitionPages/>
    <CircleImage/>
    <AvatarServices/>
    <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2 mt-25">
    <div className="max-w-[450px]">
    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5 md:px-20">
        Mis {''}
        <span className='font-bold text-secondary'>
         Servicios.
        </span>
    </h1>
    <p className="mb-3 text-xl text-gray-300">
        Ofrezco servicios de analisis, edicion y creacion de datos espaciales, administracion de base de datos espaciales, 
        analisis de datos y creacion de visualizadores enfocada en datos y desarrollo web full stack en un esquema basado 
        Javascript en el backend con NestJS y supabase o el uso de CMS como strapi y en el cliente el uso de React con NextJS.
    </p>
    <button
    onClick={sendMessage}
     className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">Contacta conmigo</button>
    </div>
    <div>
    <SliderServices/>
    </div>
    </div>
    </>
  )
}
export default page;
