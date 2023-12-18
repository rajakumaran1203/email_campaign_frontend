import React from 'react'

const PrimaryButton = ({type ,handleClick , ButtonName}) => {
  return (
    <button className='bg-primary hover:bg-[#0041A3] p-3 rounded-md shadow-md text-slate-100 font-semibold text-sm ' type={type} onClick={handleClick}>{ButtonName}</button>
  )
}

export default PrimaryButton