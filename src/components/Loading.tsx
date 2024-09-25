import Image from 'next/image'
import Logo from '../../public/assest/images/logo_icon.png'

export default function Loading() {
  return (
    <div className="z-50 w-screen md:w-full flex h-full min-h-screen top-0 left-0 bg-black/40 fixed">
      <div className='w-full h-screen bg-cover flex px-8 py-20 justify-center items-center '>
        <div className='relative top-0 left-0 rotate-45 mx-auto bg-[#FAD7A1]/10 border-[#FAD7A1] border-[2px] w-32 h-32  rounded-2xl'>
          <Image src={Logo} alt="Logo" className='mx-auto w-16 z-10 relative -rotate-45 top-9 left-1' />
          <div
            className="inline-block h-16 w-16 animate-spin text-[#FF4DCE] rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] -mt-8"
            role="status">
            <span
              className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >Loading...</span>
          </div>
        </div>
      </div>
    </div>)
}