import React from 'react'
import Lottie from "react-lottie"
import loadingAsset from '../../Assets/loading/102819-truck-icon-animation.json'
const Loading = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loadingAsset,

    };
    return (
        <Lottie
            options={defaultOptions}
            width={200}
            height={200}

        ></Lottie>
    )
}

export default Loading