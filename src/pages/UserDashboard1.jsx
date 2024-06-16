import React from 'react'

const UserDashboard1 = () => {
  return (
    <div>
      hello 
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-8">User Dashboard</h1>
      <div className="flex flex-col space-y-4">
        <button
          onClick={handleMarkAttendance}
          className="w-64 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Mark Attendance
        </button>
        <button
          onClick={handleMarkLeave}
          className="w-64 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Mark Leave
        </button>
        <button
          onClick={handleViewAttendance}
          className="w-64 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
        >
          View Attendance
        </button>
      </div>
    </div>
    </div>
  )
}

export default UserDashboard1
