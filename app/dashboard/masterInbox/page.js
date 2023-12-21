'use client'
import DashboardHeader from '@/app/ui/dashboard/dashboardHeader/page'
import { formatDate } from '@/app/utils/helper'
import { masterInboxData } from '@/constants';
import React, { useState } from 'react'

const MasterInbox = () => {
  const [DetailedData , setDetailedData] = useState([])
  

  return (
    <div className='w-full h-[80vh]'>
      <DashboardHeader heading={'Master Inbox'} />
      <div className='w-full flex '>
        <div className='w-[25%]'>
          <div className='font-semibold text-sm text-textDark bg-gray-100 border border-b-gray-600 p-2 text-center'>All Leads</div>
          <div className='w-full flex flex-col overflow-y-scroll h-[77vh]'>
          {masterInboxData.map((item) => (
            <div key={item} className='w-full p-2 py-4 hover:bg-gray-200 cursor-pointer relative border-b border-borderColor' onClick={() => setDetailedData(item)}>
              <p className='absolute right-2 top-4 text-xs text-textSoft'>{formatDate(item.sentAt)}</p>
              <p className='text-md text-textDark font-semibold'>{'name'}</p>
              <p><span className='font-semibold text-textDark'>{'from email'}</span></p>
              <p><span className='text-textSoft text-sm'>to: </span><span className='italic text-textDark'>{item.to.join(', ')}</span></p>
            </div>
          ))}
          </div>
        </div>
        <div className='w-[75%] bg-gray-100 flex items-center justify-center'>
            {DetailedData.length === 0 ? (
              <div className='w-full h-full mx-auto flex justify-center items-center '>
                <p className='text-textDark'>Click on the lead to view in detail</p>
              </div>
            ):(
              <div className='px-4 py-2 w-[70%] bg-white rounded-md email-account-card-shadow'>
              <div className='flex gap-2 py-5'>
                <p >Name</p>
                <p className='text-textDark'>from address</p>
              </div>
              <hr />
              <div className='flex flex-col space-y-2 py-5'>
                <p>subject: {DetailedData?.subject}</p>
                <p>description : {DetailedData?.text}</p>
              </div>
            </div>
            )}
        </div>
      </div>
    </div>
  )
}

export default MasterInbox