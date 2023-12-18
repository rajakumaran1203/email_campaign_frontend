import React from 'react';
import Link from 'next/link';
import { sideBarData } from '@/constants';

const SidebarComponent = ({handleSideBar}) => {

  return (
    <div className={`h-full ${handleSideBar ? 'min-w-[230px]' : 'w-auto'} shadow-md text-textDark border-r-borderColor border-r `}>
      <ul>
        {sideBarData.map((item) => {
          return handleSideBar ? (
          <Link href={item.path}>
            <li className="px-4 py-4 hover:bg-fadedBg text-center flex space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A3A2B9" className="w-6 h-6">
                <path strokeLinecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <div>{item.name}</div>
            </li>
          </Link>
          ):(
          <Link href={item.path}>
            <li className="px-4 py-4 hover:bg-fadedBg text-center flex space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A3A2B9" className="w-6 h-6">
                <path strokeLinecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </li>
          </Link>
          )
        })}
      </ul>
    </div> 
  )
}

export default SidebarComponent