import React from 'react'

const Button1 = ({name, className}) => {
  return (
    <button className={` bg-blue w-fit py-1 px-5 text-sm lg:text-[16px] text-white rounded-2xl ${className}`}>{name}</button>
  )
}

export default Button1