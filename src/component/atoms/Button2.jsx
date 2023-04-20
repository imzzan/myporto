import React from 'react'

const Button2 = ({name, onclick}) => {
  return (
    <button onClick={onclick} className=' text-blue font-[600] text-[16px] md:text-[18px] p-2 rounded-2xl underline'>{name}</button>
  )
}

export default Button2