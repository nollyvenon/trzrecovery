import React, { useState } from "react";
import { NavLink, Link} from "react-router-dom";
import {
  Img,
  Text,
} from "components";
import { FaBars } from 'react-icons/fa'
import { RxCross1 } from 'react-icons/rx'
import {useNavigate} from 'react-router-dom';

const Home = ({ theme = 'light'}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [menu, setmenu] = useState(false);
  const navigate = useNavigate();

  const handleOnClick = () => {
    setShowDropdown(state => !state)
  }


  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  
  return (
    <div className="flex justify-between px-[120px] pt-[10px] items-center n w-full z-50 md:px-[30px] sm:items-start">
      <a href="https://trzrecovery.com/">
        <Img
          className="h-[93px] md:h-auto object-cover z-10 sm:h-[70px]"
          src="images/WhatsApp Image 2023-10-03 at 2.04 1.png"
          alt="whatsappimageTwenty"
        />
      </a>


      {!menu && <FaBars className="z-[99999] text-3xl text-gray-400 absolute right-[30px] top-[30px] sm:flex hidden" onClick={() => setmenu(true)}/>}
      {menu && <RxCross1 className="z-[99999] text-3xl text-gray-400 fixed right-[30px] top-[30px] sm:flex hidden" onClick={() => setmenu(false)}/>}

     <div className={`flex items-center gap-12 relative sm:fixed sm:top-[-10px] sm:flex-col sm:right-[-30px] sm:bg-gray-900 sm:w-[80%] sm:h-screen sm:z-[999] sm:py-[100px] px-[30px] sm:justify-start sm:items-start sm:gap-7 sm:${menu? 'flex' : 'hidden'}`}>
        <NavLink to="/" className={`text-lg text-gray-400 z-10 cursor-pointer ease-in duration-200 hover:${theme=== 'dark'? 'text-blue-400': 'text-gray-50'}`}>Home</NavLink>
        <div
          className="relative z-10"
          onClick={handleOnClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <NavLink to='#' className={`text-lg text-gray-400  cursor-pointer ease-in duration-200 hover:${theme=== 'dark'? 'text-blue-400': 'text-gray-50'}`}>
            Our Services
          </NavLink>
          {showDropdown && (
            <div className="absolute bg-gray-500 p-3 top-7 w-[200px] rounded-md  z-50 flex flex-col gap-3">
              <NavLink
                to="/beauty"
                className="text-sm text-gray-300 z-10 cursor-pointer hover:${theme=== 'dark'? 'text-blue-400': 'text-gray-50'}"
              >
                Beauty
              </NavLink>
              <NavLink
                to="/recoveryservices"
                className="text-sm text-gray-200 z-10 cursor-pointer hover:${theme=== 'dark'? 'text-blue-400': 'text-gray-50'}"
              >
                Recovery Services
              </NavLink>
            </div>
          )}
        </div>
        <NavLink to="/aboutus" className={`text-lg text-gray-400 z-10 cursor-pointer ease-in duration-200 hover:${theme=== 'dark'? 'text-blue-400': 'text-gray-50'}`}>About Us</NavLink>
        <NavLink to="/faq" className={`text-lg text-gray-400 z-10 cursor-pointer ease-in duration-200 hover:${theme=== 'dark'? 'text-blue-400': 'text-gray-50'}`}>FAQ</NavLink>
        <a href="https://schedule.trzrecovery.com/ScheduleEvent/" target="_blank" rel="noopener noreferrer" className={`text-lg text-blue-800 z-10 cursor-pointer ease-in border-blue-400 border-2 py-2 px-6 rounded-[50px] duration-200 hover:${theme=== 'dark'? 'text-blue-400': 'text-gray-50'} hover:${theme=== 'dark'? 'border-blue-400': 'border-gray-50'}` }>
            Book an Appointment
        </a>
        <a href="/WaiverInfo" target="_blank" rel="noopener noreferrer" className={`text-lg text-blue-800 z-10 cursor-pointer ease-in border-blue-400 border-2 py-2 px-6 rounded-[50px] duration-200 hover:${theme=== 'dark'? 'text-blue-400': 'text-gray-50'} hover:${theme=== 'dark'? 'border-blue-400': 'border-gray-50'}` }>
            Waiver Doc
        </a>
        <NavLink to="/contact" className={`text-lg text-gray-400 z-10 cursor-pointer ease-in border-gray-400 border-2 py-2 px-6 rounded-[50px] duration-200 hover:${theme=== 'dark'? 'text-blue-400': 'text-gray-50'} hover:${theme=== 'dark'? 'border-blue-400': 'border-gray-50'}` }>Contact</NavLink>
      </div>
    </div>
  );
};
export default Home;
