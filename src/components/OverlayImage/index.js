import React from 'react'
import './overlayImage.css'

const OverlayImage = () => {
  return (
    <img alt='Overlay Nike' className='overlay-image' src={require('../../assets/nikebg.png')}></img>
  )
}

export default OverlayImage