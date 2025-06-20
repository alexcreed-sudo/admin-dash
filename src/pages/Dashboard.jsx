import React from 'react'
import Chart from "../components/Chart"
import Widget from "../components/Widget"
import {FaShoppingCart,FaUsers,FaDollarSign,FaClipboardList} from 'react-icons/fa'
function Dashboard() {
  return (
    <>
        <div className="p-6 bg-gray-100 dark:bg-gray-700 min-h-screen">
            <h1 className="text-2xl font-bold dark:text-white mb-6">Dashboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <Widget title="Users" value="1,235" icon={<FaUsers className="text-blue-500"/>}/>
                <Widget title="Orders" value="893" icon={<FaShoppingCart className="text-green-500"/>}/>
                <Widget title="Revenue" value="$17,540" icon={<FaDollarSign className="text-yellow-500"/>}/>
                <Widget title="Pending" value="45" icon={<FaClipboardList className="text-red-500"/>}/>
            </div>
            <div className="bg-white p-6 rounded shadow">
                <h2 className="text-xl font-semibold mb-4">Monthly Revenue</h2>
                <Chart/>
            </div>
        </div>
    </>
  )
}

export default Dashboard