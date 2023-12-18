'use client'
import React, { useState } from 'react'
import SidebarComponent from '@/app/ui/dashboard/sidebar/sidebar'
import NavbarComponent from '../ui/dashboard/navbar/navbar'

const Layout = ({children}) => {
  const [showSideBar , setShowSideBar] = useState(true)
  return (
    <div className='flex-col h-screen'>
        <div>
            <NavbarComponent handleSideBar={setShowSideBar} isOpen={showSideBar} />
        </div>
        <div className='w-full h-full flex'>
            <SidebarComponent handleSideBar={showSideBar} />
            {children}
        </div>
    </div>
  )
}

export default Layout