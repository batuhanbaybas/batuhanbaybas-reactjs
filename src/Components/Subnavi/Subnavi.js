

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
        <div className='flex xl:flex-row flex-col-reverse text-center  justify-between items-center '>
            <CustomBar className="p-2 xl:w-1/3 w-full ">
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
            <SelectComponent defaultValue={category} onChange={(e) => handleChange(e)} value={category} className="p-2 xl:w-1/5 w-full text-center" />
        </div>
    )
}

export default Subnavi