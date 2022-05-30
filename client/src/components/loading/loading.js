import React from 'react'
import {
    LoadingContainer,
    LoadingSpinner
} from './loadingElements';


const Loading = ({size = 100}) => {
    return (
        <LoadingContainer>
            <LoadingSpinner
                width = {size}
                height = {size}
                animation = "border"
            />
        </LoadingContainer>
    )
}

export default Loading