import { createContext } from 'react'

const UserContext = createContext({
  backgroundColor: "#000000",
  setBackgroundColor: (value: string) => { },
  eyes: false,
  setEyes: (value: boolean) => { },
  hairs: false,
  setHairs: (value: boolean) => { },
  hats: false,
  setHats: (value: boolean) => { },
  mouth: false,
  setMouth: (value: boolean) => { },
  specialEyes: false,
  setSpecialEyes: (value: boolean) => { },
  openModal: false,
  setOpenModal: (value: boolean) => { },
  address: "",
  setAddress: (value: string) => { },
  inscriptions: [""],
  setInscriptions: (value: Array<string>) => { },
})

export default UserContext
