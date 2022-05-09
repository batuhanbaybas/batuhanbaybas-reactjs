import React from 'react'
import { Link } from 'react-router-dom'
import ImageComponent from '../ImageComponent/ImageComponent'

const CardItem = (props) => {
    return (
        <Link to={`product/${props.id}`} className='w-1/5 my-10 mr-5'>
            <ImageComponent className="h-40" product={props.product} />
            <p className='py-3'>{props.product.name.slice(0,20)}</p>
            <p className='text-center'>$ <span className='pl-2'>{props.product.price}</span></p>

        </Link>
    )
}

export default CardItem