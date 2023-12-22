import React from 'react'
import Link from './Link'
/**
 * Решил выделить отдельно) 
 * Компонент-обёртка отвечает за отображение новостного контента. Принимает в себя название контента, адрес гипперссылки, иконку информ агенства.
 *  
 * @returns JSX.element, содержащий отображение новости в виде иконки информ агенства и ссылки на новость
 */
const News = ({icon, title, href}) => {
  return (
    <li className='news'>
      <img src={icon} alt='propaganda smi icon'/>
      <Link href={href} title={title} />
    </li>
  )
}

export default News