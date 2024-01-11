'use client'
import DashboardHeader from '@/app/ui/dashboard/dashboardHeader/page';
import EmailAccountCard from '@/app/ui/dashboard/emailAccountCard/page';
import { EmailCardShimmer } from '@/app/ui/dashboard/shimmer/page';
import PrimaryButton from '@/app/ui/primaryButton/page';
import { backendBaseUrl } from '@/constants';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';



const EmailCampaign = () => {
  const router = useRouter()
  const [isLoading , setIsLoading] = useState(true)
  const [campaigns,setCampaigns] = useState([])

  // useEffect(() =>{
  //   axios.get(`${backendBaseUrl}/email/campaigns`)
  //   .then((res) => { 
  //     setCampaigns(res.data)
  //     setIsLoading(false)
  //   })
  // },[])


  const handleAddCampaign = () => {
   router.push('/dashboard/emailCampaign/addCampaign')
  }

  return <div className='w-full' >
    <DashboardHeader heading={'Email Campaign'} />
    <div className='w-full flex justify-end px-6  my-4 '>
      <PrimaryButton ButtonName={'Add Campaign'} handleClick={handleAddCampaign} />
    </div>
    <div className='w-full flex flex-col'>
      <header className="flex justify-between items-center px-8 py-2 mx-4 mb-5  text-xs font-semibold  text-textSoft">
        <div className='flex gap-3 items-center min-w-[30%]'>
          <p>NAME</p>
        </div>
        <div className='flex-1 flex items-center justify-between min-w-[20%]'>
          <p>EMAIL SENT</p>
          <p>OPENED</p>
          <p className='ml-12'>UNREAD</p>
          <p>BOUNCED</p>
        </div>
        <div className='flex items-center justify-end space-x-8 min-w-[29%]'>{""}</div>
      </header>
      {/* {!isLoading ? (
          Array.from({ length: 2 }).map((_, index) => (
            <EmailCardShimmer key={index} />
          ))
        ) : campaigns.length !== 0 ? (
          campaigns.map((item) => (
            <EmailAccountCard key={item.id} {...item} isSelected={selectedAccounts.includes(item.emailAddress)} handleCardSelection={handleCardSelection}/>
          ))
        ): <p className='w-fit mx-auto font-bold text-slate-300 text-3xl mt-28'>Add a new campaign ...</p> } */}
        <p className='w-fit mx-auto font-bold text-slate-300 text-3xl mt-28'>Add a new campaign ...</p>
      </div>
  </div>
};

export default EmailCampaign;