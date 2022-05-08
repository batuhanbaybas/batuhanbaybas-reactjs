import React from 'react'

const CustomBar = (props) => {
    return (
        <div className={`rounded-xl shadow-lg my-10 bg-secondary-background ${props.className}`}>
            {props.children}
        </div>
    )
}

export default CustomBar