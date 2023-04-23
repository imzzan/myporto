import React from 'react'
import { services } from '../../constants'

const Services = () => {
  return (
    <div className=' py-10 px-[35px] xl:px-20 dark:bg-[#222222]'>
        <h1 className=' font-bold dark:text-white text-[20px] text-center text-black'>Skill</h1>
      <div className=' w-4 h-4  bg-gradient-to-t from-[#2157F2] to-[#A6BCFA] rounded-full mx-auto'></div>
      <div className=' grid grid-cols-2 mt-5 justify-center gap-5 gap-y-8'>
        {
            services.map((item, i) => {
                return (
                    <div className='rounded-lg text-center py-2 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700' data-aos={item.aos}>
                        <img src={item.image} alt="image" className=' w-[35px] mx-auto'/>
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