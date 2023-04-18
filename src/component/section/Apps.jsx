import React from 'react'
import { apps } from '../../constants'

const Apps = () => {
  return (
    <div className=' grid grid-cols-2 gap-4 py-10 md:py-14 lg:py-16 px-[35px] gap-y-8 lg:gap-y-10 xl:hidden dark:bg-[#222222]'>
        {
            apps.map((item, i) => {
                return (
                    <div className=' bg-primary dark:bg-darkblue cardapps'>
                        <img src={item.image} alt="image" className=' w-[50px] lg:w-[70px] mx-auto -mt-5 bg-white p-1 rounded-full'/>
                        <p className='my-3 text-center font-bold text-white lg:text-xl'>{item.name}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Apps