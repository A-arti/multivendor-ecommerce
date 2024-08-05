import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
    <h1>Home</h1>
    <Link to="/admin/dashboard">Go to Admin Dashboard</Link>
  </div>
  )
}

export default Home