import React from 'react';

import { apps } from '../../constants';
import {plus, ellipse, profile} from '../../assets'
import { Button1, Button2 } from '../atoms';

const Hero = () => {
  return (
    <div className=' w-full absolute p-9 xl:px-20' id='home'>
      <img src={plus} alt="plus" className=' absolute top-[60px] right-8'/>
      <img src={ellipse} alt="ellipse" className=' absolute top-[300px]' />
      <img src={ellipse} alt="ellipse" className=' absolute bottom-36 right-24 hidden lg:block' />
      <img src={plus} alt="plus" className=' absolute top-[200px] left-[30%] hidden lg:block'/>
      <div className=' w-full  h-fit cardprofile mt-11 md:mt-14 border border-blue pt-5 px-5 md:px-20 pb-6'>
          <img src={profile} alt="profile" className=' block mx-auto w-32 lg:w-48'/>
          <h1 className=' dark:text-white font-bold text-2xl md:text-4xl lg:text-5xl text-black mt-3 lg:text-center'>I’m <span className=' text-blue dark:text-darkblue'>Muhamad</span> Muzani</h1>
          <p className=' dark:text-white text-sm lg:text-lg text-black mt-2 lg:text-center'>I am a junior frontend developer and student at one of the campuses in Cirebon, West Java. I like to learn about new things in my spare time especially in web technology and mobile apps.</p>
          <div className='flex justify-center mt-5 gap-5'>
            <Button1 name='See Project' className=' hidden md:block'/>
            <Button2 name='Download Resume'/>
          </div>
      </div>
      <div className='justify-end gap-4 mt-5 hidden xl:flex'>
        {
            apps.map((item, i) => {
                return (
                    <div className=' bg-primary dark:bg-darkblue cardapps w-[200px]'>
                        <img src={item.image} alt="image" className=' w-[50px] mx-auto -mt-5 rounded-full bg-white dark:bg-[#222222] p-1'/>
                        <p className='my-3 text-center font-bold text-white lg:text-lg'>{item.name}</p>
                    </div>
                )
            })
        }
    </div>
    </div>
  )
}

export default Hero