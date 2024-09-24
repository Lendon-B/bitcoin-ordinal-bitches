import React from 'react'
import ChangeElement from "../ChangeElement"
import NFTList from '../NFTList'
import { Text1, Text2, Text3, Text4 } from '../../config/TextData'

export default function NavBar() {
  return (
    <div className='w-full h-full min-h-[calc(100vh-180px)] bg-black'>
      <div className='container'>
        <div className='w-full flex flex-col gap-[70px] items-center pt-20 bg-black'>
          <div className='w-full text-sm sm:text-2xl font-semibold text-outline bg-black'>
            {Text1}
          </div>
          <NFTList />
          <div className='w-full text-sm sm:text-2xl font-semibold text-white bg-black'>
            {Text2}
          </div>
        </div>
        <ChangeElement />
      </div>
      <div className='h-[280px] text-[24px] sm:text-[48px] font-extrabold bg-[#F69E00]'>
        <div className='h-[280px] text-[24px] sm:text-[48px] font-extrabold text-white bg-black rounded-b-full '>
          <div className='w-[190px] sm:w-[380px] flex flex-col px-3 py-1 border-white border-[2px] rounded-lg cursor-pointer mx-auto'>DOWNLOAD</div>
        </div>
      </div>
      <div className='text-sm sm:text-2xl font-semibold text-outline-black py-32 bg-[#F69E00]'>
        {Text3}
        <br />
        {Text4}
      </div>
    </div>
  )
}
