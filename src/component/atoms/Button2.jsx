import React from 'react';
import {BsArrowRight} from 'react-icons/bs';

const Button2 = ({name, onclick}) => {
  return (
    <button onClick={onclick} className=' text-blue font-[600] text-[16px] md:text-[18px] p-2 rounded-2xl flex items-center gap-1'>{name} <BsArrowRight/></button>
  )
}

export default Button2