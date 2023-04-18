import React from 'react'
import { services } from '../../constants'

const Services = () => {
  return (
    <div className=' py-10 px-[35px] xl:px-20 dark:bg-[#222222]'>
        <h1 className=' font-bold dark:text-white text-[20px] text-center text-black'>Services</h1>
      <div className=' w-4 h-4  bg-gradient-to-t from-[#2157F2] to-[#A6BCFA] rounded-full mx-auto'></div>
      <div className=' grid grid-cols-2 mt-5 justify-center gap-5 gap-y-8'>
        {
            services.map((item, i) => {
                return (
                    <div className=' border border-blue text-center p-3 rounded-xl'>
                        <img src={item.image} alt="image" className=' w-[35px] mx-auto mb-3'/>
                        <h1 className=' font-[500] text-sm dark:text-white lg:text-[16px] text-black'>{item.name}</h1>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Services