import React from 'react'
import { useSelector } from 'react-redux'
import AddButton from '../../Components/AddButton/AddButton'
import MainContent from '../../Components/Content/MainContent'
import Loading from '../../Components/Loading/Loading'
import { selectIsLoading } from '../../Redux/features/categorySlice'






const HomePAge = () => {
    const isLoading = useSelector(selectIsLoading)



    return (
        <>
            {isLoading && <Loading />}
            <MainContent />
            <AddButton />
        </>
    )
}

export default HomePAge