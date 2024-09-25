import { createContext } from 'react'
import { value } from 'valibot'

const UserContext = createContext({
  backgroundColor: false,
  setBackgroundColor: (value: boolean) => { },
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
  selectedBackgroundColor: "",
  setSelectedBackgroundColor: (value: string) => { },
  selectedEyes: "",
  setSelectedEyes: (value: string) => { },
  selectedHairs: "",
  setSelectedHairs: (value: string) => { },
  selectedHats: "",
  setSelectedHats: (value: string) => { },
  selectedMouth: "",
  setSelectedMouth: (value: string) => { },
  selectedSpecialEyes: "",
  setSelectedSpecialEyes: (value: string) => { },
  openModal: false,
  setOpenModal: (value: boolean) => { },
  address: "",
  setAddress: (value: string) => { },
  inscriptions: [""],
  setInscriptions: (value: Array<any>) => { },
  loading: false,
  setLoading: (value: boolean) => { },
})

export default UserContext
