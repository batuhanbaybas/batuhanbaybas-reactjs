import React from 'react'

const ImageComponent = (props) => {
    return (
        <img src={props.product.avatar} alt={props.product.name}
            className={`w-full object-contain bg-white bg-no-repeat content-center rounded-xl 
        ${props.className}`} />
    )
}

export default ImageComponent