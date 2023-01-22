import React from 'react';

import { Menu } from '../../components/menu/menu';

import './main-page.scss';

export const MainPage = () => (
  <section className='main-page'>
    <Menu />
    <main>
      <div className='navigation-list'>navigate</div>
      <div className='content'>список книг</div>
    </main>
  </section>
);
