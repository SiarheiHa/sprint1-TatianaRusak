import React from 'react';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { nanoid } from 'nanoid';

import './menu.scss';

const categories = [
  { genre: 'Все книги', count: null },
  { genre: 'Бизнес-книги', count: 14 },
  { genre: 'Детективы', count: 8 },
  { genre: 'Детские книги', count: 14 },
  { genre: 'Зарубежная литература', count: 2 },
  { genre: 'История', count: 5 },
  { genre: 'Классическая литература', count: 12 },
  { genre: 'Книги по психологии', count: 11 },
  { genre: 'Компьютерная литература', count: 54 },
  { genre: 'Культура и искусство', count: 5 },
  { genre: 'Наука и образование', count: 2 },
  { genre: 'Публицистическая литература', count: 0 },
  { genre: 'Справочники', count: 10 },
  { genre: 'Фантастика', count: 12 },
  { genre: 'Юмористическая литература', count: 8 },
];

export const Menu = () => {
  const menuItems = categories.map((item) => (
    <li className='submenu__cat' key={nanoid()}>
      <NavLink to='/'>
        {item.genre} <span>{item.count}</span>
      </NavLink>
    </li>
  ));

  return (
    <aside className='menu'>
      <ul className='menu_list'>
        <li className='menu__item '>
          <NavLink to='/' className='menu__link showcase'>
            <h5>Витрина книг</h5>
          </NavLink>
          <ul className='submenu__categories'>{menuItems}</ul>
        </li>
        <li className='menu__item'>
          <NavLink to='/rules' className='menu__link'>
            <h5>Правила пользования</h5>
          </NavLink>
        </li>
        <li className='menu__item'>
          <NavLink to='/offerta' className='menu__link'>
            <h5>Договор оферты</h5>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};
