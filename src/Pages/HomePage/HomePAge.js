import React from 'react'
import { useSelector } from 'react-redux'
import MainContent from '../../Components/Content/MainContent'
import Loading from '../../Components/Loading/Loading'
import { selectIsLoading } from '../../Redux/features/categorySlice'






const HomePAge = () => {
    const isLoading = useSelector(selectIsLoading)


    return (
        <>

            {isLoading ? <Loading /> :
                <MainContent />
            }
        </>
    )
}

export default HomePAge