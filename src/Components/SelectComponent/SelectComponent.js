import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CustomBar from '../../CustomComponents/CustomBar/CustomBar'
import ValidationComponent from '../ValidationComponent/ValidationComponent'
import { fetchCategories, selectCategory } from '../../Redux/features/categorySlice'

const SelectComponent = (props) => {
    const dispatch = useDispatch()
    const categories = useSelector(selectCategory)
    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])
    return (
        <CustomBar className={props.className}>
            {props.validation && <ValidationComponent validationMessage={props.validationMessage} />}
            <select defaultValue={props.defaultValue} name={props.name} onChange={props.onChange} value={props.value}
                className='w-full outline-none bg-transparent text-slate-600 px-1 text-center'>
                <option value="All">All</option>
                {

                    categories?.map(category => (

                        <option key={category.id} value={category.name}>{category.name}</option>
                    ))

                }

            </select>
        </CustomBar>
    )
}

export default SelectComponent