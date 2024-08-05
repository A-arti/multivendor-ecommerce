import React from 'react'
import { Outlet } from 'react-router-dom'

function AdminDashboard() {
  return (
    <div>
      <h1>Admin DashBoard <Outlet /> </h1>
      
    </div>
  )
}

export default AdminDashboard