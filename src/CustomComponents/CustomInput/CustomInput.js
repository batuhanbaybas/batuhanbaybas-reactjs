import React from 'react'
import CustomBar from '../CustomBar/CustomBar'
import ValidationComponent from '../../Components/ValidationComponent/ValidationComponent'

const CustomInput = (props) => {

    return (
        <>
            <CustomBar className={props.wrapperClassName} >
                {props.validation && <ValidationComponent validationMessage={props.validationMessage} />}
                <input
                    autoComplete='off'
                    name={props.name}
                    id={props.id}

                    type={props.type} placeholder={props.placeholder}
                    onChange={props.onChange} value={props.value}
                    className={`${props.className} p-3 w-full rounded-xl  outline-none`} />


            </CustomBar>
        </>
    )
}

export default CustomInput