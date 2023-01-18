import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-images-wrapper'>
      <img alt='Product 1' className='footer-product-image' src={require('../../assets/prod1.webp')} width='170px' height='170px'/>
      <img alt='Product 1' className='footer-product-image' src={require('../../assets/prod2.webp')} width='170px' height='170px'/>
      <img alt='Product 1' className='footer-product-image' src={require('../../assets/prod3.webp')} width='170px' height='170px'/>
      </div>
      <div className='footer-play-icon'>
        <img alt='Play icon' className='footer-video-logo' src={require('../../assets/playvideo.png')} width='90px' height='90px'
        />
        <div className='footer-play-label'>Play Video</div>
      </div>
    </div>
  )
}

export default Footer