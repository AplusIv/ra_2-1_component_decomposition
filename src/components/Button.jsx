import React from 'react'
/**
 * Компонент отвечает за отображение кнопок на странице. Принимает в себя название кнопки
 * 
 * @returns JSX.element, содержащий отображение кнопки
 */
const Button = ({title}) => {
  return (
    <button className='btn'>{title}</button>
  )
}

export default Button