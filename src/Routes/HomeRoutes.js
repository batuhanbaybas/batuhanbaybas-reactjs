import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import Subnavi from '../Components/Subnavi/Subnavi'

const HomeRoutes = () => {
    return (
        <>
            <Navbar />
            <Subnavi />
            <Outlet />
        </>
    )
}

export default HomeRoutes