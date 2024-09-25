import React from 'react'
import { BsTwitterX, BsDiscord, BsTelegram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <div className='w-full h-[90px] flex flex-col bg-[#0D1121]'>
      <div className='container'>
        <div className='w-full h-[90px] flex flex-col 2xs:flex-row justify-between items-center py-2 px-[10px] sm:px-[100px] text-white'>
          <p className='text-[12px] sm:text-[14px]'>©2024 Bitches. All Rights Reserved.</p>
          <div className='flex flex-row justify-start items-center gap-2 text-sm sm:text-xl'>
            <div className='rounded-full flex flex-col p-[10px] bg-[#ffffff]/10 border-[1px] border-[#ffffff] cursor-pointer'>
              <BsTwitterX />
            </div>
            <div className='rounded-full flex flex-col p-[10px] bg-[#ffffff]/10 border-[1px] border-[#ffffff] cursor-pointer'>
              <BsDiscord />
            </div>
            <div className='rounded-full flex flex-col p-[10px] bg-[#ffffff]/10 border-[1px] border-[#ffffff] cursor-pointer'>
              <BsTelegram />
            </div>
            <div className='rounded-full flex flex-col p-[10px] bg-[#ffffff]/10 border-[1px] border-[#ffffff] cursor-pointer'>
              <MdEmail />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
