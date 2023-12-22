import React from 'react'
/**
 * Простой компонент-обёртка отвечает за отображение популярных категорий. Принимает в себя список детей-категорий.
 * 
 * @returns JSX.element, содержащий отображение списка категорий
 */
const Categories = ({children}) => {
  return (
    <ul className='categories'>{children}</ul>
  )
}

export default Categories