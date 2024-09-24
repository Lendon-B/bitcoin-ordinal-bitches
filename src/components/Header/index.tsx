import React from 'react'
import { OrdConnectKit } from "@ordzaar/ord-connect";
import Image from "next/image";
import Logo from "../../../public/assest/images/bitches logo.png"

export default function index() {

  return (
    <div className='w-full h-[90px] flex flex-col bg-black border-b-[2px] border-b-[#411A5B]'>
      <div className='container'>
        <div className='w-full h-[90px] flex flex-row items-center justify-between px-2 sm:px-10'>
          <a href='/'>
            <Image src={Logo} alt="Logo" className='max-w-[100px] sm:max-w-[250px] h-[50] flex flex-col' />
          </a>
          <OrdConnectKit />
        </div>
      </div>
    </div>
  )
}
