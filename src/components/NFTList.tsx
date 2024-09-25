import React, { useContext, useEffect } from 'react'
import Image from 'next/image'
import { NFTListData } from '../config/TextData'
import UserContext from '@/contexts/usercontext';
import { getInscriptions } from '@/utils/api/unisat.api';

export default function NFTList() {

  const { address } = useContext<any>(UserContext);

  useEffect(() => {
    console.log("address => ", address)
    getInscriptions(address);

  }, [address]);

  return (
    <div className='flex flex-wrap items-center justify-center gap-2 bg-black'>
      {NFTListData.map((item: any, index: number) => {
        return (
          <div key={index} className=''>
            <Image src={item} alt="NFTs" className='w-20 h-20 2xs:w-32 2xs:h-32 sm:w-48 sm:h-48 cursor-pointer' />
          </div>
        )
      })}
    </div>)
}
