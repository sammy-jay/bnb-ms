import React from 'react'
import { RiMessage2Line } from "react-icons/ri";

const TopNavBar = () => {
  return (
    <nav className="w-full py-3 px-4 fixed top-0 left-0 right-0 bg-[#212244] flex flex-row justify-between items-center">
      <button className="rounded-full bg-[#4394ED] py-2 px-3 text-[14px] text-white">
        Connect Wallet
      </button>

      <div className='flex flex-row space-x-2 justify-between items-center'>
        <RiMessage2Line className="w-5 h-5 text-white font-bold " />
        <span className="text-gray-300 text-[12px] rounded-full py-2 px-3 bg-gray-700">
          English
        </span>
      </div>
    </nav>
  );
}

export default TopNavBar