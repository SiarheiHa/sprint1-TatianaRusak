import React from 'react';
import { Link } from 'react-router-dom';
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
      <a href='/'>
        {item.genre} <span>{item.count}</span>
      </a>
    </li>
  ));

  return (
    <aside className='menu'>
      <ul className='menu_list'>
        <li className='menu__item active'>
          <h5>Витрина книг</h5>
          <ul className='submenu__categories'>{menuItems}</ul>
        </li>
        <li className='menu__item'>
          <Link to='/rules'>
            <h5>Правила пользования</h5>
          </Link>
        </li>
        <li className='menu__item'>
          <Link to='/offerta'>
            <h5>Договор оферты</h5>
          </Link>
        </li>
      </ul>
    </aside>
  );
};
