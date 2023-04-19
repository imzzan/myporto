import React from 'react';


import { ellipsedot, inswhite, location, person, upload, wawhite } from '../../assets';
import { aboutme } from '../../constants';

const About = () => {
  return (
    <div className=' bg-primary dark:bg-darkblue w-full h-screen mx-auto pt-5 md:py-12 lg:py-14 relative xl:px-20 -z-20' id='about'>
      <br/>
        <div className='rounded-tl-[53px] lg:mt-20 lg:ml-0 rounded-br-[53px] backdrop-blur-xl cardabout mx-[35px] p-3 md:p-6 lg:w-[450px] lg:h-[350px]' data-aos="fade-right">
            <div className=' flex justify-end gap-3 mb-3'>
                <img src={inswhite} alt="ins" className=' w-4 md:w-5'/>
                <img src={wawhite} alt="ins" className=' w-4 md:w-5'/>
                <img src={upload} alt="ins" className=' w-4 md:w-5'/>
            </div>
            <h1 className=' font-bold text-3xl md:text-4xl text-black mt-3 dark:text-white'>I’m <span className=' text-blue dark:text-darkblue'>Muhamad</span> Muzani</h1>
            <div className=' mt-3 flex flex-col gap-2'>
              {
                aboutme.map((item, i) => {
                  return (
                    <div className='flex justify-start gap-2 items-start'>
                      <img src={ellipsedot} alt="asa" className='mt-1 w-4'/>
                      <p className=' text-[16px] lg:text-[20px] text-black dark:text-white'>{item}</p>
                    </div>
                  )
                })
              }
            </div>
        </div>
        <img src={location} alt="location" className=' absolute bottom-1/4 w-full md:w-[300px] lg:w-[80%] -z-10' data-aos="zoom-in"/>
        <img src={person} alt="person" className=' absolute bottom-0 right-0 w-[200px] md:w-[250px] lg:w-[30%] ' data-aos="fade-up"/>
    </div>
  )
}

export default About