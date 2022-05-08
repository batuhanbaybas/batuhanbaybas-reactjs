import React from 'react'

const CardItem = () => {
    return (
        <div className='w-1/5 my-10 mr-5'>
            <img src="https://via.placeholder.com/150" alt="" className='w-full h-[150px] object-cover bg-no-repeat rounded-xl' />
            <p className='py-3'>Product Name</p>
            <p className='text-center'>$Price</p>

        </div>
    )
}

export default CardItem