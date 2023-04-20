import React from 'react'

const Button1 = ({name, className, onclick}) => {
  return (
    <button onClick={onclick} className={` bg-blue dark:bg-darkblue border border-white w-fit py-1 px-5 text-[16px] md:text-[18px] text-white rounded-2xl ${className}`}>{name}</button>
  )
}

export default Button1