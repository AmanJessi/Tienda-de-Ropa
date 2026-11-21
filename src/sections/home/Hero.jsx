import { useState } from 'react';
import video1 from '../../assets/videos/video1.mp4'
import video2 from '../../assets/videos/video2.mp4'
import video3 from '../../assets/videos/video3.mp4'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Hero=()=>{
    const [actual,setActual]=useState(0)
    const CambiarVideo=(indice)=>{
        setActual(indice)
    }
    const videos=[
        {
            video:video1,
            titulo:"VISTE TU PROPIA",
            texto:"Descubre las tendencias que definen tu estilo"
        },
        {
            video:video2,
            titulo:"TU ESTILO TUS REGLAS",
            texto:"Encuentra lo que tanto buscas",
        },
        {
            video:video3,
            titulo:"NUEVA TEMPORADA",
            texto:"Renueva tu llock con nuestra coleccion"
        }
    ]
    return(
        <section className='relative h-[600px]'>
           {
            videos.map((vd,index)=>(
                <video 
                autoPlay
                muted
                loop
                src={vd.video}
                className={`absolute h-full w-full object-cover transition-opacity duration-700
                    ${actual===index?'opacity-100':'opacity-0'}
                    `}
                />
            ))
           }
           <div className='absolute h-full inset-0 bg-black/50 '></div>
           {/*Boton Izquierdo*/}
           <button 
            onClick={()=>{
                CambiarVideo((actual-1+videos.length)%videos.length)
            }}
            className='absolute top-1/2 left-6 z-10'>
            
            <IoIosArrowBack color='#FFFFFF' />
           </button>

           <button
           onClick={()=>{
             CambiarVideo((actual+1)%videos.length)
           }}
           className='absolute top-1/2 right-4 z-10'
           >
            <IoIosArrowForward color="#FFFFFF"/>
           </button>
           <div className='absolute w-full h-full flex flex-col items-center justify-center text-white'>
                <p className='uppercase tracking-wider font-bold mb-2'>Descubre lo mejor</p>
                <h2 className='text-4xl'>{videos[actual].titulo}</h2>
                <p className='text-xl mt-2'>{videos[actual].texto}</p>
           </div>
        </section>
    )  
}

export default Hero