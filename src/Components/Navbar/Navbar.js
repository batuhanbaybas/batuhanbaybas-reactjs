import React from 'react'
import { Link } from 'react-router-dom'
import CustomBar from '../../CustomComponents/CustomBar/CustomBar'

const Navbar = () => {
    return (
        <CustomBar className='p-5  xl:my-10 my-5'>
            <div className='flex justify-between items-center font-medium italic xl:text-2xl text-xl text-black'>
                <Link to={"/"}>
                    UPayment Store
                </Link>
                <div >
                    Register
                </div>
            </div>
        </CustomBar>
    )
}

export default Navbar