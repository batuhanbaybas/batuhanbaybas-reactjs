import React from 'react'
import CustomBar from '../CustomBar/CustomBar'

const CustomInput = (props) => {

    return (
        <CustomBar className={props.wrapperClassName} >
            <input
                autoComplete='off'
                name={props.name}
                id={props.id}

                type={props.type} placeholder={props.placeholder}
                onChange={props.onChange} value={props.value}
                className={`${props.className} p-3 w-full rounded-xl  outline-none`} />


        </CustomBar>
    )
}

export default CustomInput