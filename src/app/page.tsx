"use client";
import React, { useState } from 'react';
import UserContext from '../contexts/usercontext';
import Header from '../components/Header/index'
import NavBar from '../components/NavBar/index'
import Footer from '../components/Footer/index'
import WalletModal from '@/components/WalletModal';
import Loading from '@/components/Loading';

export default function Home() {
  const [backgroundColor, setBackgroundColor] = useState<boolean>(false);
  const [eyes, setEyes] = useState<boolean>(false);
  const [hairs, setHairs] = useState<boolean>(false);
  const [hats, setHats] = useState<boolean>(false);
  const [mouth, setMouth] = useState<boolean>(false);
  const [specialEyes, setSpecialEyes] = useState<boolean>(false);
  const [selectedBackgroundColor, setSelectedBackgroundColor] = useState<string>("");
  const [selectedEyes, setSelectedEyes] = useState<string>("");
  const [selectedHairs, setSelectedHairs] = useState<string>("");
  const [selectedHats, setSelectedHats] = useState<string>("");
  const [selectedMouth, setSelectedMouth] = useState<string>("");
  const [selectedSpecialEyes, setSelectedSpecialEyes] = useState<string>("");
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [address, setAddress] = useState<string>("");
  const [inscriptions, setInscriptions] = useState<Array<string>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <main className="App flex min-h-screen flex-col items-center justify-between bg-[#F69E00]">
      <UserContext.Provider value={{ backgroundColor, setBackgroundColor, eyes, setEyes, hairs, setHairs, hats, setHats, mouth, setMouth, specialEyes, setSpecialEyes, openModal, setOpenModal, address, setAddress, inscriptions, setInscriptions, selectedBackgroundColor, setSelectedBackgroundColor, selectedEyes, setSelectedEyes, selectedHairs, setSelectedHairs, selectedHats, setSelectedHats, selectedMouth, setSelectedMouth, selectedSpecialEyes, setSelectedSpecialEyes, loading, setLoading }}>
        <Header />
        <NavBar />
        <Footer />
        {openModal == true && <WalletModal />}
        {loading == true && <Loading />}
      </UserContext.Provider>
    </main>
  );
}
