import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import UserContext from '@/contexts/usercontext';
import { getInscriptions } from '@/utils/api/unisat.api';
import collectionData from '../config/collection.json';
import backgroundColorData from '../config/background_data.json'

export default function NFTList() {
  const { address, inscriptions, setInscriptions, setSelectedEyes, setSelectedHairs, setSelectedHats, setSelectedMouth, setSelectedSpecialEyes, setSelectedBackgroundColor, setBackgroundColor, setEyes, setHairs, setHats, setMouth, setSpecialEyes, setLoading } = useContext<any>(UserContext);
  const [walletInscriptions, setWalletInscriptions] = useState<string[]>([]);

  const handleGetInscriptions = async (address: string) => {
    setLoading(true);
    const newInscriptions = await getInscriptions(address)

    if (newInscriptions != undefined) {
      setWalletInscriptions(newInscriptions.map((item: { inscriptionId: any; }) => (item.inscriptionId)))
    }
    setLoading(false);

  }

  useEffect(() => {
    if (address != "" || address != undefined) {
      handleGetInscriptions(address);
    }
  }, [address]);


  useEffect((() => {
    let tempInscriptions: Array<any> = [];

    collectionData.map((item, index) => {
      if (walletInscriptions.findIndex((value) => value == item.id) >= 0) {
        tempInscriptions.push(item)
      }
    });
    setInscriptions(tempInscriptions)
  }), [walletInscriptions])

  const selectNft = async (nft: any) => {
    console.log(nft)

    let tempNftBgColor: any = [];

    await backgroundColorData.map((item: any, index) => {
      if (walletInscriptions.findIndex((value) => value == item.id) >= 0) {
        tempNftBgColor.push(item)
      }
    })

    if (nft && nft.meta && nft.meta.attributes) {
      setBackgroundColor(true)
      setEyes(true)
      setHairs(true)
      setHats(true)
      setMouth(true)
      setSpecialEyes(true)
      const backgroundColorAttribute = tempNftBgColor[0]?.meta?.attributes?.[0]?.value;
      setSelectedBackgroundColor(backgroundColorAttribute || 'default-color');
      // setselectedeBackgroundColor(tempNftBgColor.meta.attributes[0]?.value)
      setSelectedEyes(nft.meta.attributes[0]?.value || 'default-value');
      setSelectedHairs(nft.meta.attributes[1]?.value || 'default-value');
      setSelectedHats(nft.meta.attributes[2]?.value || 'default-value');
      setSelectedMouth(nft.meta.attributes[3]?.value || 'default-value');
      setSelectedSpecialEyes(nft.meta.attributes[4]?.value || 'default-value');
    } else {
      console.warn('Nft or its attributes are not defined');
    }
  }

  return (
    <div className='flex flex-wrap items-center justify-center gap-2 bg-black'>
      {address === undefined || address === '' ?
        <div className='text-white text-xl sm:text-3xl font-semibold'>Please Connect Wallet</div>
        :
        <>
          {inscriptions.length === 0 || inscriptions === undefined ?
            <div className='text-white text-xl sm:text-3xl font-semibold'>You currently do not have that NFT in your wallet</div>
            :
            <>
              {inscriptions.length >= 1 ?
                <div onClick={() => selectNft(inscriptions[0])}>
                  <Image src={`https://ordinals.com/content/${inscriptions[0].id}`} alt="NFTs" width={192} height={192} className='cursor-pointer rounded-lg' />
                </div>
                :
                <>
                  {
                    inscriptions.map((item: any, index: number) => {
                      return (
                        <div key={index} onClick={() => selectNft(item)} >
                          <Image src={`https://ordinals.com/content/${item.id}`} alt="NFTs" className='cursor-pointer rounded-lg' />
                        </div>
                      )
                    })
                  }
                </>
              }

            </>
          }
        </>
      }

    </div>)
}
