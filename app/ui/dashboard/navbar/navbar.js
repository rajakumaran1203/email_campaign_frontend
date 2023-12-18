'use client'
import React from 'react'
import Link from 'next/link'


const NavbarComponent = ({handleSideBar , isOpen}) => {
  const handleToggle = () => {
    isOpen ? handleSideBar(false) : handleSideBar(true)
  }
  return (
    <div className='w-full h-16 pl-4 pr-6 py-2  flex justify-between items-center bg-primary text-slate-50 shadow-md'>
      <div className='space-x-5 flex'>
      <div className='cursor-pointer' onClick={handleToggle}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-full">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
      </div>
        <div className='text-2xl font-semibold'>Logo</div>
      </div>
      <div className='space-x-5 flex'>
        <p>Help</p>
        <Link href='/'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-full">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        </Link>
      </div>
    </div>
  )
}

export default NavbarComponent