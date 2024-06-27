'use client';
import { dataAboutPage } from "@/data";
const LineLife = () => {
  return (
    <div className="flex flex-col justify-center divide-y divide-slate-200">
    <div className="w-full max-w-3xl mx-auto md:pb-40 md:pt-20">
    <div className="-my-6">
    {
        dataAboutPage.map(({id,title,subtitle,description,date})=>{
           return  <div key={id} className="relative py-6 pl-8 sm:pl-32 group">
                   <h3 className="mb-1 text-2xl font-bold sm:mb-0">
                   {title}
                   </h3>
                   <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">                
                   <time className="sm:absolute left-0 traslate-y-0.5 inline-flex items-center justify-center text-sm font-semibold uppercase w-20 h-8 mb-3 sm:mb-0">
                    {date}
                   </time>
                   <p className="text-xl font-bold text-gray-400">
                    {subtitle}
                   </p>
                   </div>
                   <p className="text-slate-400 text-justify max-w-md">{description}</p>
                  </div>
        })
    }
    </div>
    </div>
    </div>
  )
}

export default LineLife
