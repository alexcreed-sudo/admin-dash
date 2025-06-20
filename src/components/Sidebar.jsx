import { React,useState } from 'react'
import { FiHome,FiUsers,FiSettings,FiMenu } from 'react-icons/fi'
import {Link,useLocation} from 'react-router-dom'
function Sidebar() {
    const [isOpen,setIsOpen] = useState(false);
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }
    const location = useLocation();
    const links = [
            {name:"Dashboard",icon:<FiHome/>,path:"/"},
            {name:"Users",icon:<FiUsers/>,path:"/users"},
            {name:"Settings",icon:<FiSettings/>,path:"/settings"},
        ];
  return (
    <>
        <div className="flex">
            <div className={`${isOpen ? "w-64" : "w-16"} min-h-screen bg-white dark:bg-gray-800 text-gray-800 dark:text-white transition-all duration-300 flex flex-col`}>
                <div className="flex justify-end p-3">
                    <button className="hover:text-blue-600 dark:hover:text-gray-900" onClick={toggleSidebar}><FiMenu size={20}/></button>
                </div>
                <nav className="flex flex-col gap-2 px-2">
                    {links.map((link) => {const isActive = location.pathname === link.path; return (<Link to={link.path} key={link.name} className="flex items-center gap-4 p-2 rounded hover:bg-blue-600 dark:hover:bg-gray-700">
                        {link.icon}{isOpen && <span>{link.name}</span>}
                    </Link>)})}
                </nav>
            </div>
        </div>
    </>
  )
}

export default Sidebar