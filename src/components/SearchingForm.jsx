import React from 'react'
import Button from './Button'
/**
 * Специальный компонент, отвечающий за форму поиска
 * 
 * @returns JSX.element, содержащий разметку с окошком поиска, уточнением и кнопки поиска
 */
const SearchingForm = () => {
  return (
    <form className='form searchForm'>
      <label>
        <input 
          className='search-input input' 
          name='search' 
          placeholder='Начните вводить. Найдём всё! Что-то утаим ;)'
          required
        />
      </label>
      <Button title='Найти'/>
      <span>Начните вводить. Найдём всё! Что-то утаим ;)</span>
    </form>
  )
}

export default SearchingForm
