"use client";
import Image from "next/image"
import TransitionComponent from "./TransitionComponent"
import AvatarP1 from "@/public/codificacion.png"
const AvatarPortafolio = () => {
  return (
    <TransitionComponent position='bottom' className="bottom-0 left-0 hidden md:inline-block md:absolute">
      <Image src={AvatarP1} alt="Ava1" width={200} height={200} className="w-full h-full"/>
    </TransitionComponent>
  )
}

export default AvatarPortafolio;
