import React from 'react'
import { Outlet } from 'react-router'
import { useAuth } from '../Context/AuthContext'
import Login from '../Pages/Login/Login'

export default function ProtectedRoute() {
    const {currentUser} =useAuth()
    return currentUser ?<Outlet/>:<Login/>
}
