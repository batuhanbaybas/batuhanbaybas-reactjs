import React from 'react'
import Lottie from 'react-lottie'
import pageNotFound from "../../Assets/404/6734-404-error-glitch-2.json"
const PageNotFound = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: pageNotFound,
  }
  return (<div className='h-screen flex items-center justify-center flex-col text-2xl'>
    <Lottie
      options={defaultOptions}
      width={200}
      height={200}
    />
    Page Not Found
  </div>
  )
}

export default PageNotFound