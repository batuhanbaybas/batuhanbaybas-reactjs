import React from 'react'

const ValidationMessage = (props) => {
    return (
        <>
            <div className="text-red-600 text-xs italic">
                {props.message}
            </div>
        </>


    )
}

export default ValidationMessage