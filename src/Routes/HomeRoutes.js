import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import Subnavi from '../Components/Subnavi/Subnavi'

const HomeRoutes = () => {
    return (
        <div className='relative'>
            <Navbar />
            <Subnavi />
            <Outlet />
        </div>
    )
}

export default HomeRoutes