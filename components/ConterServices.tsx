"use client";
import CountUp from "react-countup";
import { dataCounter } from "@/data";

const ConterServices = () => {
  return (
    <div className="grid justify-between max-w-3xl grid-cols-2 gap-3 mx-auto my-8 md:grid-cols-4 md:gap-6 ">
      {
        dataCounter.map(({id,endCounter,text,lineRight,lineRightMobile})=>{
            return <div key={id} className={`${lineRight && 'ltr'}`}>
                  <div className={`${lineRight && 'px-4 border-2 border-transparent md:border-e-gray-100'}
                                   ${lineRightMobile && 'border-e-gray-100'}`}>
                   <p className="flex mb-2 text-2xl font-extrabold md:text-4xl text-secondary">
                    + <CountUp end={endCounter} start={0} duration={10}/>
                   </p>
                   <p className="text-xs uppercase max-w-[100px]">{text}</p>
                   </div>
                  </div>
        })
      }
    </div>
  )
}

export default ConterServices
