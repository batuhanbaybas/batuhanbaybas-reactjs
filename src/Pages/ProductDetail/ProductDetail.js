import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ImageComponent from '../../Components/ImageComponent/ImageComponent'
import Loading from '../../Components/Loading/Loading'
import { fetchSingleProduct,singlePageLoading, singleProduct } from '../../Redux/features/productSlice'

const ProductDetail = () => {
    const dispatch = useDispatch()
    const product = useSelector(singleProduct)
    const loading = useSelector(singlePageLoading)

    const { id } = useParams()
    useEffect(() => {
        dispatch(fetchSingleProduct(id))
    }, [id, dispatch])

    return (
        <div className='py-10'>
          
            {loading ? <Loading /> : (
                <>
                    <div className='flex h-64 '>
                        <div className='w-1/3'>
                            <ImageComponent className={"h-full"} product={product} />
                        </div>
                        <div className='flex flex-col justify-between h-full px-14 text-3xl font-bold'>
                            <h1 >{product.name}</h1>
                            <p><span className='pr-1'>$</span> {product.price}</p>
                        </div>
                    </div>
                    <hr className='border-black my-24 ' />
                    <div>
                        <h2 className='text-3xl pb-8 font-bold'>Description</h2>
                        <p>{product.description}</p>
                    </div>
                </>
            )}

        </div>
    )
}

export default ProductDetail