import React from 'react';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { nanoid } from 'nanoid';

import bookStore from '../../utils/books.json';

import './menu.scss';

export const Menu = () => {
  const categoriesFullOfBooks = Object.entries(bookStore);

  const menuItems = categoriesFullOfBooks.map((item) => (
    <li className='submenu__cat' key={nanoid()}>
      <NavLink to={`/books/${item[0]}`} className='submenu__link'>
        <span>{item[0]}</span> <span>{item[1].length}</span>
      </NavLink>
    </li>
  ));

  return (
    <aside className='menu'>
      <ul className='menu_list'>
        <li className='menu__item '>
          <NavLink to='/books' className='menu__link showcase'>
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
