import React from 'react'
import CustomBar from '../../CustomComponents/CustomBar/CustomBar'
import SelectComponent from '../SelectComponent/SelectComponent'

const Subnavi = () => {
    return (
        <div className='flex justify-between items-center '>
            <CustomBar className="p-2 w-1/3 ">
                Deneme
            </CustomBar>
                <SelectComponent className="p-2 w-1/5" />
          

        </div>
    )
}

export default Subnavi