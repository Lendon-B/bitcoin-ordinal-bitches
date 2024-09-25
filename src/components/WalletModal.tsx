import React, { useContext, useEffect, useRef, useState } from 'react'
import UserContext from '@/contexts/usercontext';
import Image from 'next/image'
import { ME, OKX, UNISAT, WalletList, XVERSE } from '../config/TextData'
import { GrLinkNext } from "react-icons/gr";
import { connectToUnisatWallet } from '@/utils/wallet/unisat';
import { connectToXverseWallet } from '@/utils/wallet/xverse';
import { connectToOkxWallet } from '@/utils/wallet/okx';
import { connectToMeWallet } from '@/utils/wallet/me';


export default function WalletModal() {
  const { setOpenModal, address, setAddress } = useContext<any>(UserContext);
  const menuDropdown = useRef<HTMLDivElement | null>(null);

  const connectWallet = async (id: string) => {
    if(id == UNISAT) {
      let unisatAddress = await connectToUnisatWallet();
      setAddress(unisatAddress[0].address);
    } else if(id == XVERSE) {
      let xverseAddress = await connectToXverseWallet();
      setAddress(xverseAddress[0].address);
    } else if(id == OKX) {
      let okxAddress = await connectToOkxWallet();
      setAddress(okxAddress[0].address);
    } else if(id == ME) {
      let meAddress = await connectToMeWallet();
      setAddress(meAddress[0].address);
    }
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuDropdown.current && !menuDropdown.current.contains(event.target as Node)) {
        setOpenModal(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuDropdown]);

  return (
    <div className='w-full h-screen absolute flex flex-col top-0 left-0 items-center justify-center gap-2 bg-black/95 z-50'>
      <div ref={menuDropdown} className='w-[280px] xs:w-[400px] flex flex-col border-[1px] border-[#232428] bg-[#121315]/20 shadow-lg shadow-[#FAD7A1] justify-center items-center py-10 px-6 gap-4 mx-auto rounded-lg'>
        <div className='text-[24px] font-semibold text-white mb-3'>Connect Wallet</div>

        {WalletList.map((item, index) =>
          <div key={index} onClick={() => {connectWallet(item.id); setOpenModal(false)}} className='w-full flex flex-row items-center justify-between px-4 py-2 rounded-lg bg-[#FAD7A1]/10 hover:bg-[#FAD7A1]/50 border-[1px] border-[#FAD7A1] cursor-pointer'>
            <div className='flex flex-row items-center justify-start'>
              <Image src={item.url} alt={item.id} className='w-5 h-5' />
              <div className='text-[16px] text-[#FAD7A1] ml-2'>{item.name}</div>
            </div>
            <GrLinkNext className='text-[#FAD7A1]' />
          </div>
        )}

        <div onClick={() => setOpenModal(false)} className='text-[20px] font-semibold text-[#FAD7A1] px-5 py-1 border-[#FAD7A1] border-[1px] bg-[#FAD7A1]/10 hover:bg-[#FAD7A1]/50 rounded-lg cursor-pointer mt-5'>Cancel</div>
      </div>
    </div>)
}
