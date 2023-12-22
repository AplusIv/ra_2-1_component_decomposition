import React from 'react'
/**
 * Компонент отвечает за отображение рекламного банера. Принимает ссылку на рекламный контент, адрес изображения и подпись, в случае проблем с отображением.
 * 
 * @returns JSX.element, содержащий разметку
 */
const AdBanner = ({src, alt, href}) => {
  return (
    <div className='banner-container'>
      <a href={href}>
        <img src={src} alt={alt}/>
      </a>
    </div>
  )
}

export default AdBanner