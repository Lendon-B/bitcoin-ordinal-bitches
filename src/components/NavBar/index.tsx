import React, { useContext } from 'react'
import UserContext from '@/contexts/usercontext'
import ChangeElement from "../ChangeElement"
import NFTList from '../NFTList'
import { Text1, Text2, Text3, Text4 } from '../../config/TextData'

export default function NavBar() {
  const { backgroundColor, eyes, hairs, hats, mouth, specialEyes, selectedBackgroundColor, selectedEyes, selectedHairs, selectedHats, selectedMouth, selectedSpecialEyes } = useContext<any>(UserContext);

  const downloadImage = () => {
    console.log("backgroundColor===>", backgroundColor)
    console.log("eyes===>", eyes)
    console.log("hairs===>", hairs)
    console.log("hats===>", hats)
    console.log("mouth===>", mouth)
    console.log("specialEyes===>", specialEyes)
    console.log("selectedBackgroundColor===>", selectedBackgroundColor)
    console.log("selectedEyes===>", selectedEyes)
    console.log("selectedHairs===>", selectedHairs)
    console.log("selectedHats===>", selectedHats)
    console.log("selectedMouth===>", selectedMouth)
    console.log("selectedSpecialEyes===>", selectedSpecialEyes)
  }

  return (
    <div className='w-full h-full min-h-[calc(100vh-180px)] bg-black'>
      <div className='container'>
        <div className='w-full flex flex-col gap-[70px] items-center pt-20 bg-black'>
          <div className='w-full text-sm sm:text-2xl font-semibold text-outline bg-black px-4'>
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
        <div className='sm:h-[280px] text-[24px] sm:text-[48px] font-extrabold text-white bg-black downrounded '>
          <div onClick={() => downloadImage()} className='w-[190px] sm:w-[380px] flex flex-col px-3 py-1 border-white border-[2px] rounded-lg cursor-pointer mx-auto'>DOWNLOAD</div>
        </div>
      </div>
      <div className='text-sm sm:text-2xl font-semibold text-outline-black py-32 px-4 bg-[#F69E00]'>
        {Text3}
        <br />
        {Text4}
      </div>
    </div>
  )
}
