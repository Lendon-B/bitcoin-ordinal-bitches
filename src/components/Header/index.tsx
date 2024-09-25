
"use client"
import React, { useContext } from 'react'
import UserContext from '@/contexts/usercontext';
import Image from "next/image";
import Logo from "../../../public/assest/images/bitches logo.png"
export default function Header() {
  const { setOpenModal, address } = useContext(UserContext);
  const formatWalletAddress = (address: string) => {
    if (!address || address.length < 8) {
      return 'No Address'
    }
    const firstFive = address.slice(0, 5)
    const lastThree = address.slice(-5)
    return `${firstFive}...${lastThree}`
  }
  return (
    <div className='w-full h-[90px] flex flex-col bg-black border-b-[2px] border-b-[#411A5B]'>
      <div className='container'>
        <div className='w-full h-[90px] flex flex-row items-center justify-between px-2 sm:px-10'>
          <a href='/'>
            <Image src={Logo} alt="Logo" className='max-w-[100px] sm:max-w-[250px] h-[50] flex flex-col' />
          </a>
          <div onClick={() => setOpenModal(true)} className='flex flex-col w-[120px] h-[32px] sm:w-[250px] sm:h-[50px] items-center justify-center rounded-full ord-connect-font text-white font-bold text-[14px] sm:text-xl cursor-pointer'>
            {address ? <p className='w-[80%] truncate'>{formatWalletAddress(address)}</p> : <p>Connect Wallet</p>}
          </div>
        </div>
      </div>
    </div>
  )
}