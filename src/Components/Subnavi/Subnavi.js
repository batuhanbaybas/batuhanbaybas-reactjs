

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CustomBar from '../../CustomComponents/CustomBar/CustomBar'
import { editCategory, fetchAllProducts, selectProduct } from '../../Redux/features/productSlice'
import Infobar from '../InfoBar/Infobar'
import SelectComponent from '../SelectComponent/SelectComponent'

const Subnavi = () => {
    const dispatch = useDispatch()
    const products = useSelector(selectProduct)
    const [category, setCategory] = useState("All")
    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [dispatch])

    const handleChange = (e) => {
        setCategory(e.target.value)
        dispatch(editCategory(e.target.value))
    }


    return (
        <div className='flex justify-between items-center '>
            <CustomBar className="p-2 w-1/3 ">
                {products.length === 0 && <>There is no data</>}
                {

                    products.length < 3 ?
                        products.map(product => (
                            <Infobar key={product.id} product={product} />)) :
                        products.slice(0, 4).map(product => (
                            <Infobar key={product.id} product={product} />
                        ))
                }

            </CustomBar>
            <SelectComponent defaultValue={category} onChange={(e) => handleChange(e)} value={category} className="p-2 w-1/5" />
        </div>
    )
}

export default Subnavi