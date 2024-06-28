"use client";
import Image from "next/image"
import TransitionComponent from "./TransitionComponent"
import Data from "@/public/dato.png"
const AvatarServices = () => {
  return (
    <TransitionComponent position='right' className="bottom-0 left-0 hidden md:inline-block md:absolute">
    <Image src={Data} alt="Data" width={150} height={150} className="w-[150px] h-full"/>
    </TransitionComponent>
  )
}

export default AvatarServices
