import React from 'react'
import {FiBell,FiUser,FiSearch,FiMoon,FiSun} from "react-icons/fi"
import { useState } from 'react';
import { useEffect } from 'react';
import { useDarkMode } from '../context/DarkModeContext'
import NotificationDropDown from './NotificationDropDown';
import ProfileMenu from './ProfileMenu';
function Topbar() {

    const {darkMode,setDarkMode} = useDarkMode();
  return (
    <>
        <div className="flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-900 border-b dark:border-gray-700 shadow-sm">
            {/**Search bar */}
            <div className="relative w-full max-w-sm">
                <span className="absolute top-2.5 left-3 text-gray-400 dark:text-gray-300">
                    <FiSearch/>
                </span>
                <input type="text" placeholder="Search..." className="w-full pl-10 pr-4 py-2 border rounded-lg bg-gray-1000 dark:bg-gray-800 dark:text-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="flex items-center gap-4 ml-auto">
                <button className='text-gray-600 '><NotificationDropDown/> </button>
                <button className='text-gray-600 '><ProfileMenu/> </button>
                <button onClick={() => {setDarkMode(!darkMode)}} className="text-gray-600 dark:text-gray-300 hover:text-yellow-500">{darkMode ? <FiSun size={20}/> : <FiMoon size={20} />}</button>
            </div>
        </div>
    </>
  )
}

export default Topbar