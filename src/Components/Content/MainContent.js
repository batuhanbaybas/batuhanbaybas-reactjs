import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts, selectProduct } from '../../Redux/features/productSlice'
import CardItem from '../CardItem/CardItem'

const MainContent = () => {
    const dispatch = useDispatch()
    const products = useSelector(selectProduct)

    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [dispatch])

    return (
        <div className='max-w-5xl mt-10 mx-auto flex  justify-center flex-wrap items-center'>

            {
                products.map(product => (

                    <CardItem id={product.id} key={product.id} product={product} />
                ))
            }


        </div>
    )
}

export default MainContent