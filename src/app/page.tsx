"use client";
import React, { useState } from 'react';
import UserContext from '../contexts/usercontext';
import Header from '../components/Header/index'
import NavBar from '../components/NavBar/index'
import Footer from '../components/Footer/index'
import WalletModal from '@/components/WalletModal';

export default function Home() {
  const [backgroundColor, setBackgroundColor] = useState<string>("");
  const [eyes, setEyes] = useState<boolean>(false);
  const [hairs, setHairs] = useState<boolean>(false);
  const [hats, setHats] = useState<boolean>(false);
  const [mouth, setMouth] = useState<boolean>(false);
  const [specialEyes, setSpecialEyes] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [address, setAddress] = useState<string>("");
  const [inscriptions, setInscriptions] = useState<Array<any>>([]);

  return (
    <main className="App flex min-h-screen flex-col items-center justify-between bg-[#F69E00]">
      <UserContext.Provider value={{ backgroundColor, setBackgroundColor, eyes, setEyes, hairs, setHairs, hats, setHats, mouth, setMouth, specialEyes, setSpecialEyes, openModal, setOpenModal, address, setAddress, inscriptions, setInscriptions }}>
        <Header />
        <NavBar />
        <Footer />
        {openModal == true && <WalletModal />}
      </UserContext.Provider>
    </main>
  );
}
