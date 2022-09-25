import React from 'react'
import './LoadingSpinner.css'

const LoadingSpinner = ({width, height}) => {
    return (
        <div className="spinner-container" style={{width, height}}>
            <div className="lds-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default LoadingSpinner
