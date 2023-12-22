import React from 'react'
import Link from './Link'
/**
 * Решил выделить отдельно) 
 * Компонент-обёртка отвечает за отображение акций, курсов валют и тд. и т.п. Принимает в себя props, которые должнф содержать название сущности, адрес гипперссылки, изменение котировок по конкретной сущности.
 *  
 * @returns JSX.element, содержащий отображение акций, курсов валют и тд. и т.п. в виде ссылки на сущность и изменеие котировок
 */

const Stock = ({...props}) => {
  return (
    <li className='stock-name'>
      <Link title={props.title} href={props.href}/>
      <span className='difference'>{props.difference}</span>
    </li>  
    )
}

export default Stock