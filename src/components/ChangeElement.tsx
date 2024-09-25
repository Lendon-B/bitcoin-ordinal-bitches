"use client"
import React, { useContext, useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import UserContext from '../contexts/usercontext'
import UpBtn from '../../public/assest/images/Arrow 1.png'
import DownBtn from '../../public/assest/images/Arrow 2.png'
import { BackgrounColorList } from '@/config/TextData'
import NFTImg from "../../public/assest/images/3.png"

export default function ChangeElement() {
  const { backgroundColor, setBackgroundColor, eyes, setEyes, hairs, setHairs, hats, setHats, mouth, setMouth, specialEyes, setSpecialEyes, setSelectedBackgroundColor } = useContext<any>(UserContext);

  const [colorIndex, setColorIndex] = useState(0);

  const handleClickIndex = (type: number) => {
    if (type === -1 && colorIndex > 0 || type === 1 && colorIndex < BackgrounColorList.length - 4) {
      setColorIndex((prevIndex) => prevIndex + type);
    }
  }

  return (
    <div className='w-full h-full text-white bg-black py-14'>
      <div className='container grid place-items-center'>
        <div className='w-full grid gap-14 md:[grid-template-columns:auto_1fr_auto] [grid-template-rows:auto_1fr_auto] max-w-[700px] place-items-center'>
          <div className='h-[360px] md:flex flex-col gap-5 items-end justify-between hidden'>
            <div className='cursor-pointer' onClick={() => handleClickIndex(-1)}>
              <Image src={UpBtn} alt='UpBtn' className='w-[30px] h-[30px] mx-[10px]' />
            </div>

            <div className="overflow-hidden">
              <div className="grid gird-cols-5 gap-4 transition-all" style={{ transform: `translateY(-${colorIndex * 65}px)` }}>
                {BackgrounColorList.map((item, index) => {
                  return <Image onClick={() => setSelectedBackgroundColor(item.id)} src={item.url} alt="colors" key={index} className="flex flex-col rounded-full w-[50px] h-[50px] border-[1px] border-[#ffffff] cursor-pointer" />
                })}
              </div>
            </div>


            <div className='cursor-pointer' onClick={() => handleClickIndex(1)}>
              <Image src={DownBtn} alt='UpBtn' className='w-[30px] h-[30px] mx-[10px]' />
            </div>
          </div>
          <div className='h-[60px] w-[240px] 3xs:w-[360px] md:hidden flex gap-5 items-center justify-between'>
            <div className='cursor-pointer' onClick={() => handleClickIndex(-1)}>
              <Image src={UpBtn} alt='UpBtn' className='w-[30px] h-[30px] -rotate-90' />
            </div>

            <div className="overflow-hidden w-[120px] 2xs:w-[190px] 2sm:w-[240px]">
              <div className="grid gap-4 transition-all" style={{ transform: `translateX(-${colorIndex * 65}px)`, gridTemplateColumns: `repeat(${BackgrounColorList.length}, 50px)` }}>
                {BackgrounColorList.map((item, index) => {
                  return <Image onClick={() => setSelectedBackgroundColor(item.id)} src={item.url} style={{ width: '50px', height: '50px' }} alt='colors' key={index} className="flex rounded-full w-[50px] h-[50px] border-[1px] border-[#ffffff] cursor-pointer" />
                })}
              </div>
            </div>


            <div className='cursor-pointer' onClick={() => handleClickIndex(1)}>
              <Image src={DownBtn} alt='UpBtn' className='w-[30px] h-[30px] -rotate-90' />
            </div>
          </div>
          <Image src={NFTImg} alt="CanvarImage" className='w-[250px] h-[250px] rounded-full flex flex-col items-center justify-center border-2 border-white' />
          <div className='w-[200px] flex flex-col border-[2px] border-[#FF4DCE] text-[20px] font-medium'>
            <div className='w-full justify-start items-center flex flex-row gap-2 px-[10px] py-2 border-b-[2px] border-b-[#FF4DCE] cursor-pointer hover:bg-[#FF4DCE]/20'>
              <input type='checkbox' checked={eyes} onChange={() => setEyes(!eyes)} className='w-[20px] h-[20px] bg-black outline-[#FF4DCE]' />
              <p>EYES</p>
            </div>
            <div className='w-full justify-start items-center flex flex-row gap-2 px-[10px] py-2 border-b-[2px] border-b-[#FF4DCE] cursor-pointer hover:bg-[#FF4DCE]/20'>
              <input type='checkbox' checked={hairs} onChange={() => setHairs(!hairs)} className='w-[20px] h-[20px] bg-black outline-[#FF4DCE] cursor-pointer hover:bg-[#FF4DCE]/20' />
              <p>HAIRS</p>
            </div>
            <div className='w-full justify-start items-center flex flex-row gap-2 px-[10px] py-2 border-b-[2px] border-b-[#FF4DCE] cursor-pointer hover:bg-[#FF4DCE]/20'>
              <input type='checkbox' checked={hats} onChange={() => setHats(!hats)} className='w-[20px] h-[20px] bg-black outline-[#FF4DCE]' />
              <p>HATS</p>
            </div>
            <div className='w-full justify-start items-center flex flex-row gap-2 px-[10px] py-2 border-b-[2px] border-b-[#FF4DCE] cursor-pointer hover:bg-[#FF4DCE]/20'>
              <input type='checkbox' checked={mouth} onChange={() => setMouth(!mouth)} className='w-[20px] h-[20px] bg-black outline-[#FF4DCE]' />
              <p>MOUTH</p>
            </div>
            <div className='w-full justify-start items-center flex flex-row gap-2 px-[10px] py-2 border-b-[2px] border-b-[#FF4DCE] cursor-pointer hover:bg-[#FF4DCE]/20'>
              <input type='checkbox' checked={specialEyes} onChange={() => setSpecialEyes(!specialEyes)} className='w-[20px] h-[20px] bg-black outline-[#FF4DCE]' />
              <p>SPECIAL EYES</p>
            </div>
            <div className='w-full justify-start items-center flex flex-row gap-2 px-[10px] py-2 cursor-pointer hover:bg-[#FF4DCE]/20'>
              <input type='checkbox' checked={backgroundColor} onChange={() => setBackgroundColor(!backgroundColor)} className='w-[20px] h-[20px] bg-black outline-[#FF4DCE]' />
              <p>BG COLOR</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
