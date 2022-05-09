import React from 'react'

const ValidationComponent = (props) => {
    return (
        <p className='text-primary-error_color text-xs px-3 italic'>{props.validationMessage}</p>
    )
}

export default ValidationComponent