import React from 'react'

const Infobar = (props) => {
    return (
        <span className='pr-1'>
            {props.product.name.slice(0, 10)},
        </span>
    )
}

export default Infobar