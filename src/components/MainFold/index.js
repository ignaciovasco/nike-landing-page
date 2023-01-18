import React from 'react'
import './mainFold.css'
const MainFold = () => {
  return (
    <div className='main-fold'>
      <div className='main-fold-content'>
        <div className='main-fold-title'>
          Nike Air Max Pre-Day
        </div>
        <div className='main-fold-description'>
        Nike Air Max es una línea de zapatillas de running de la marca Nike con una unidad de aire visible en la suela. Esta unidad proporciona amortiguación adicional para el pie del usuario mientras corre. La línea Air Max fue lanzada por primera vez en 1987 y ha sido popular entre los corredores y los entusiastas de la moda desde entonces. Varias versiones diferentes de Air Max han sido lanzadas a lo largo de los años, cada una con características y diseños únicos. Algunas de las versiones más populares incluyen las Nike Air Max 90, Air Max 95 y Air Max 97.
        </div>
        <div className='main-fold-price-btn'>
          <div className='main-fold-btn'>
            Buy Now
          </div>
          <div className='main-fold-price'>
            $350
            </div>
        </div>
      </div>
    </div>
  )
}

export default MainFold