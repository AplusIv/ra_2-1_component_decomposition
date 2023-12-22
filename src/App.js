import {nanoid} from 'nanoid';
import './App.css';

import News from './components/News';
import SearchingForm from './components/SearchingForm';
import AdBanner from './components/AdBanner';
import BasicWidjet from './components/BasicWidjet';
import Link from './components/Link';
import Categories from './components/Categories';
import Stock from './components/Stock';

import newsIcon from './icons/news-icon.png';
import banner from './img/banner.webp';
import weather from './icons/weather.svg';
import play from './icons/play.png';
import mistakes from './img/beginner-teaching-mistakes.jpg'


function App () {
  return (
    <>
      <section className='main-widjets'>
        <BasicWidjet theme='news' country='России'>
            <Link linkType='header-link' title='Популярные фанатазии, навострите уши, жители России' href=''/>
            <ul>
              <News key={nanoid()} icon={newsIcon} href='https://developer.mozilla.org/ru/docs/Web/HTML/Element/a' title='Наш президент - просто лучший'/>
              <News key={nanoid()} icon={newsIcon} href='https://developer.mozilla.org/ru/docs/Web/HTML/Element/a' title='Наш президент - красавчик'/>
              <News key={nanoid()} icon={newsIcon} href='https://developer.mozilla.org/ru/docs/Web/HTML/Element/a' title='Наш президент - великий стратег'/>
              <News key={nanoid()} icon={newsIcon} href='https://developer.mozilla.org/ru/docs/Web/HTML/Element/a' title='Вокруг одни злодеи и нацисты'/>
              <News key={nanoid()} icon={newsIcon} href='https://developer.mozilla.org/ru/docs/Web/HTML/Element/a' title='Запад загибается, осталось недолго'/>
            </ul>
        </BasicWidjet>
        <BasicWidjet theme='education'>
          <Link linkType='header-link' href='' title='Работа над ошибками'/>
          <img src={mistakes} alt="widjet's pic"/>
          <div>Информация из виджета</div>
        </BasicWidjet>
        <BasicWidjet theme='stocks'>
          <ul>
            <Stock key={nanoid()} title='Золото' href='' difference='+0.08'></Stock>
            <Stock key={nanoid()} title='Нефть' href='' difference='-0.04'></Stock>
            <Stock key={nanoid()} title='Газ' href='' difference='+0.17'></Stock>
          </ul>
        </BasicWidjet>
      </section>
      <Categories>
        <li key={nanoid()}><Link linkType='header-link' href='' title='Картинки'/></li>
        <li key={nanoid()}><Link linkType='header-link' href='' title='Переводчик'/></li>
        <li key={nanoid()}><Link linkType='header-link' href='' title='Маркет'/></li>
        <li key={nanoid()}><Link linkType='header-link' href='' title='Карты'/></li>
        <li key={nanoid()}><Link linkType='header-link' href='' title='Образование'/></li>
        <li key={nanoid()}><Link linkType='header-link' href='' title='Видео'/></li>
      </Categories>
      <SearchingForm/>
      <AdBanner src={banner} alt='ad banner' href='https://developer.mozilla.org/ru/docs/Web/HTML/Element/a'/>
      <section className='other-widjets'>
        <BasicWidjet theme={'wheather'}>
          <Link linkType='header-link' href='' title='Погода'/>
          <img src={weather} alt="widjet's pic"/>
          <div>Информация из виджета</div>
        </BasicWidjet>
        <BasicWidjet theme={'popular'}>
          <Link linkType='header-link' href='' title='Посещаемое'/>
          <div>Информация из виджета</div>
        </BasicWidjet>
        <BasicWidjet theme={'map'}>
          <Link linkType='header-link' href='' title='Карта России'/>
          <div>Информация из виджета</div>
        </BasicWidjet>
        <BasicWidjet theme={'tele'}>
          <Link linkType='header-link' href='' title='Телепрограмма'/>
          <div>Информация из виджета</div>
        </BasicWidjet>
        <BasicWidjet theme={'on-air'}>
          <Link linkType='header-link' href='' title='Эфир'/>
          <div className='on-air-desc'>
            <a href='https://developer.mozilla.org/ru/docs/Web/HTML/Element/a'>
              <img src={play} alt="play"/>
            </a>
            <Link href='https://developer.mozilla.org/ru/docs/Web/HTML/Element/a' title='Эфир 1'/>
          </div>
          <div className='on-air-desc'>
            <a href='https://developer.mozilla.org/ru/docs/Web/HTML/Element/a'>
              <img src={play} alt="play"/>
            </a>
            <Link href='https://developer.mozilla.org/ru/docs/Web/HTML/Element/a' title='Эфир 2'/>
          </div>
          <div className='on-air-desc'>
            <a href='https://developer.mozilla.org/ru/docs/Web/HTML/Element/a'>
              <img src={play} alt="play"/>
            </a>
            <Link href='https://developer.mozilla.org/ru/docs/Web/HTML/Element/a' title='Эфир 3'/>
          </div>        
        </BasicWidjet>
      </section>
    </>
  );
}

export default App;
