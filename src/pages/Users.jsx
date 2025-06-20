import React from 'react'

const users = [
    {id:1,name:"Alice Johnson",email:"alice@example",role:"Admin",status:"Active"},
    {id:1,name:"Bob Smith",email:"bob@example",role:"User",status:"pending"},
    {id:1,name:"Charlie Lee",email:"charlie@example",role:"User",status:"Suspended"},
]
function Users() {
  return (
    <>
        <div className="p-6 bg-gray-100 dark:bg-gray-900 transition-colors duration-300 min-h-screen">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Users</h1>
            <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded shadow">
                <table className="min-w-full table-auto text-left">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                        <tr>
                            <th className="p-4 font-medium text-gray-600 dark:text-gray-300">Name</th>
                            <th className="p-4 font-medium text-gray-600 dark:text-gray-300">Email</th>
                            <th className="p-4 font-medium text-gray-600 dark:text-gray-300">Role</th>
                            <th className="p-4 font-medium text-gray-600 dark:text-gray-300">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className="border-b border-gray-200 dark:border-gray-700 dark:hover:bg-gray-700 hover:bg-gray-50">
                                <td className="p-4 text-gray-800 dark:text-gray-100">{user.name}</td>
                                <td className="p-4 text-gray-800 dark:text-gray-100">{user.email}</td>
                                <td className="p-4 text-gray-800 dark:text-gray-100">{user.role}</td>
                                <td className="p-4">
                                    <span className={`px-2 py-1 rounded text-xs font-medium ${user.status === "Active" ? "bg-green-100 dark:bg-green-700 text-green-800 dark:text-green-100" : user.status === "Pending" ? "dark:bg-yellow-700 bg-yellow-100 text-yellow-800 dark:text-yellow-100" : "dark:bg-red-700 bg-red-100 text-red-800 dark:text-red-100"}`}>
                                        {user.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </> 
  )
}

export default Users