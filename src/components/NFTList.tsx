import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { NFTListData } from '../config/TextData'
import UserContext from '@/contexts/usercontext';
import { getInscriptions } from '@/utils/api/unisat.api';
import collectionData from '../config/collection.json';
export default function NFTList() {

  const { address, inscriptions, setInscriptions } = useContext<any>(UserContext);
  const [walletInscriptions, setWalletInscriptions] = useState<any[]>([]);

  const handleGetInscriptions = async (address: string) => {
    const newInscriptions = await getInscriptions(address)

    if (newInscriptions != undefined) {
      setWalletInscriptions(newInscriptions.map((item: { inscriptionId: any; }) => (item.inscriptionId)))
    }
  }

  useEffect(() => {
    if (address != "" || address != undefined) {
      handleGetInscriptions(address);
    }
  }, [address]);


  useEffect((() => {
    let inscriptionIdArray = collectionData.map((item, index) => {
      return item.id;
    });
    const filteredIds = walletInscriptions.filter(item => inscriptionIdArray.includes(item));

    setInscriptions(filteredIds)
  }), [walletInscriptions])

  
  ///////////////////////////////////////////////////////////////
  // Display ordinal collection of wallet
  ///////////////////////////////////////////////////////////////

  useEffect(() => {
    console.log("inscriptions => ", inscriptions)
  }, [inscriptions])


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
