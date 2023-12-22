import React from 'react'
/**
 * Компонент-обёртка отвечает за отображение ссылок. Принимает в себя название контента, адрес гипперссылки, тип ссылки.
 * Тип ссылки может быть не конкретизирован, тогда отображается базовая разметка, либо задан (далее в CSS используется соответствующая стилизация) 
 * 
 * @returns JSX.element, содержащий отображение ссылки
 */
const Link = ({title, href, linkType}) => {
  return (linkType) ? <a className={'link ' + linkType} href={href}>{title}</a> : <a className='link' href={href}>{title}</a>
}

export default Link