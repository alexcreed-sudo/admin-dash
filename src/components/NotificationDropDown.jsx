import { useState,useRef,useEffect } from "react";
import { FiBell } from "react-icons/fi";

const NotificationDropDown = () =>{
    const [open,setOpen] = useState(false);
    const dropdownRef = useRef();
    
    useEffect(() => {
        const handleClickOutside = (e) =>{
            if(dropdownRef.current && !dropdownRef.current.contains(e.target)){
                setOpen(false);
            }
        };
        document.addEventListener("mousedown",handleClickOutside);return () => document.removeEventListener("mousedown",handleClickOutside);
    },[]);
    
    return (
        <div className="relative" ref={dropdownRef}>
            <button onClick={() => setOpen(!open)} className="text-gray-600 dark:text-gray-300 hover:text-blue-500"><FiBell size={20}/></button>
            {open && (
                <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded shadow-lg z-10">
                    <div className="p-4 border-b dark:border-gray-700 font-semibold text-gray-700 dark:text-white">Notifications</div>
                    <ul className="text-sm max-h-60 overflow-y-auto">
                        <li className="p-4 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-200">New user registered</li>
                        <li className="p-4 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-200">System update schedueled</li>
                        <li className="p-4 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-200">Password change requested</li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default NotificationDropDown;