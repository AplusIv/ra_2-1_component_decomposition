import React from 'react'
/**
 * Базовый компонент всех виджетов на странице. Принимает произвольный контент виджета в свойстве children и тематику виджета (строчку) для дальнейшей стилизации в CSS
 * 
 * @returns JSX.element, содержащий разметку
 */
const BasicWidjet = ({...props}) => {
  return (
    <div className={`widjet ${props.theme}-widjet`}>
      {props.children}
    </div>

  )
}

export default BasicWidjet