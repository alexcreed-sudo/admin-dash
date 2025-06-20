import { useState,useRef,useEffect } from "react";
import { FiUser } from "react-icons/fi";

const ProfileMenu = () =>{
    const [open,setOpen] = useState(false);
    const menuRef = useRef();
    
    useEffect(() => {
        const handler = (e) =>{
            if(menuRef.current && !menuRef.current.contains(e.target)){
                setOpen(false);
            }
        };
        document.addEventListener("mousedown",handler);return () => document.removeEventListener("mousedown",handler);
    },[]);
    
    return (
        <div className="relative" ref={menuRef}>
            <button onClick={() => setOpen(!open)} className="text-gray-600 dark:text-gray-300 hover:text-blue-500"><FiUser size={20}/></button>
            {open && (
                <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded shadow-lg z-10">
                    
                    <ul className="text-sm max-h-60 text-gray-700 dark:text-gray-200 overflow-y-auto">
                        <li className="p-4 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer text-gray-600 darK:text-gray-200">Profile</li>
                        <li className="p-4 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer text-gray-600 darK:text-gray-200">Settings</li>
                        <li className="p-4 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer dark:text-red-400 text-red-500">Logout</li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default ProfileMenu;