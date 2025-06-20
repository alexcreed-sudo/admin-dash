import React from 'react'
import { useState } from 'react'
import { useDarkMode } from '../context/DarkModeContext';
function Settings() {
    const {darkMode,setDarkMode} = useDarkMode();
    const [username,setUsername] = useState("admin")
  return (
    <>
        <div className="p-6 bg-gray-100 dark:bg-gray-700 min-h-screen">
            <h1 className="text-2xl dark:text-white font-bold mb-6">Settings</h1>
            <div className="bg-white dark:bg-gray-500 p-6 rounded shadow max-w-xl space-y-6">
                <div>
                    <label className="block text-sm font-medium dark:text-white text-gray-700">Username</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="mt-1 w-full dark:text-white border rounded px-3 py-2" />
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium dark:text-white text-gray-700">Enable Dark Mode</span>
                    <label className="inline-flex relative items-center cursor-pointer">
                        <input type="text" className="sr-only peer" checked={darkMode} onClick={() => {setDarkMode(!darkMode)}} />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
                    </label>
                </div>
            </div>
        </div>
    </>
  )
}

export default Settings