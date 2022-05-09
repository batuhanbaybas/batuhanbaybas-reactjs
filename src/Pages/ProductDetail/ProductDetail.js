import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ImageComponent from '../../Components/ImageComponent/ImageComponent'
import Loading from '../../Components/Loading/Loading'
import { fetchSingleProduct, singlePageLoading, singleProduct } from '../../Redux/features/productSlice'

const ProductDetail = () => {
    const dispatch = useDispatch()
    const product = useSelector(singleProduct)
    const loading = useSelector(singlePageLoading)

    const { id } = useParams()
    useEffect(() => {
        dispatch(fetchSingleProduct(id))
    }, [id, dispatch])

    return (
        <div className='xl:py-10 xl:px-0 px-5 '>

            {loading ? <Loading /> : (
                <>
                    <div className='flex xl:h-64 xl:flex-row flex-col h-2/5 xl:p-0 px-5  '>
                        <div className='xl:w-1/3 w-full'>
                            <ImageComponent className={"h-full"} product={product} />
                        </div>
                        <div className='flex flex-col justify-between xl:items-stretch xl:m-0 mt-3 items-center h-full px-14 xl:text-3xl text-xl font-semibold'>
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