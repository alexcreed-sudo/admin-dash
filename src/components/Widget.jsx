import React from 'react'

function Widget({title,value,icon}) {
  return (
    <>
        <div className="bg-white dark:bg-gray-600 p-4 rounded shadow flex items-center justify-between">
            <div>
                <h4 className="text-sm dark:text-gray-100 text-gray-500">{title}</h4>
                <p className="dark:text-white text-xl font-bold">{value}</p>
            </div>
            <div className="text-2xl">{icon}</div>
        </div>
    </>
  )
}

export default Widget