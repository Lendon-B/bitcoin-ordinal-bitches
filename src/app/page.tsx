"use client";
import React, { useState } from 'react';
import UserContext from '../contexts/usercontext';
import Header from '../components/Header/index'
import NavBar from '../components/NavBar/index'
import Footer from '../components/Footer/index'

export default function Home() {
  const [backgroundColor, setBackgroundColor] = useState<string>("");
  const [eyes, setEyes] = useState<boolean>(false);
  const [hairs, setHairs] = useState<boolean>(false);
  const [hats, setHats] = useState<boolean>(false);
  const [mouth, setMouth] = useState<boolean>(false);
  const [specialEyes, setSpecialEyes] = useState<boolean>(false);

  return (
    <main className="App flex min-h-screen flex-col items-center justify-between bg-[#F69E00]">
      <UserContext.Provider value={{ backgroundColor, setBackgroundColor, eyes, setEyes, hairs, setHairs, hats, setHats, mouth, setMouth, specialEyes, setSpecialEyes }}>
        <Header />
        <NavBar />
        <Footer />
      </UserContext.Provider>
    </main>
  );
}
