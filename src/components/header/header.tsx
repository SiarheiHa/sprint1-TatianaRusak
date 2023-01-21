import { ReactComponent as Logo } from '../../assets/icons/logo-clevertec.svg';
import avatar from '../../assets/images/avatar.jpg';

import './header.scss';

export const Header = () => (
  <div className='header'>
    <div className="header__link">
      <a href="/">
        <Logo />
      </a>
    </div>

    <div className='header__content'>
      <h3 className='header__title'>Библиотека</h3>
      <div className="header__person person">
        <p className="person__name">Привет, Иван!</p>
        <img src={avatar} alt="" className="person__avatar" />
      </div>
    </div>
  </div>
  )

