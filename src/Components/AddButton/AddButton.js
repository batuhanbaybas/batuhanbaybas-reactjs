import React from 'react'
import { Link } from 'react-router-dom'

const AddButton = () => {
    return (
        <Link to={"/product/new"} className='fixed bottom-10 right-1/4 z-10 hover:opacity-80 items-center font-bold p-5 text-4xl  flex justify-center text-white bg-black w-20 h-20 rounded-full'>
            +
        </Link>
    )
}

export default AddButton