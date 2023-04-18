import React from 'react'

const Button1 = ({name, className}) => {
  return (
    <button className={` bg-blue dark:bg-darkblue border border-white w-fit py-1 px-5 text-sm md:text-[16px] lg:text-[20px] text-white rounded-2xl ${className}`}>{name}</button>
  )
}

export default Button1