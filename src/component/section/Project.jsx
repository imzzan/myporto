import React from 'react'
import { project } from '../../constants'

const Project = () => {
  return (
    <div className=' py-5 dark:bg-[#222222] md:py-14 lg:py-16 px-[35px] xl:px-20' id='project'>
      <h1 className=' dark:text-white font-bold text-[20px] text-center text-black'>Project</h1>
      <div className=' w-4 h-4  bg-gradient-to-t from-[#2157F2] to-[#A6BCFA] rounded-full mx-auto'></div>
      <div className=' grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5 justify-center gap-5 gap-y-10'>
        {
          project.map((item, i) => {
            return (
              <div className='h-auto bg-white shadow-xl rounded-xl border border-blue' data-aos={item.aos} data-aos-delay={item.delay}>
                <img src={item.image} alt="image" className=' h-[100px] md:h-[150px] w-full object-cover rounded-t-xl'/>
                <div className='mt-1 p-3 flex flex-col justify-between gap-5'>
                  <h1 className=' font-bold text-[18px] lg:text-[20px] text-black'>{item.name}</h1>
                  <a href={item.link} target='_blank' className='text-[16px] md:text-sm lg:text-[16px] text-blue underline'>See Preview</a>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Project