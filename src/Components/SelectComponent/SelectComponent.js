import React from 'react'
import CustomBar from '../../CustomComponents/CustomBar/CustomBar'

const SelectComponent = (props) => {
    return (
        <CustomBar className={props.className}>
            <select name={props.name} onChange={props.onChange} value={props.value} className='w-full outline-none bg-transparent text-slate-600 px-1'>
                <option value={"Deneme 1"}>Deneme 1</option>
                <option value={"Deneme 2"}>Deneme 2 </option>
                <option value={"Deneme 3"}>Deneme 3</option>
            </select>
        </CustomBar>
    )
}

export default SelectComponent