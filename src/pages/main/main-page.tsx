import React from 'react';

import { Menu } from '../../components/menu/menu';
import { Navigation } from '../../components/navigation/navigation';

import './main-page.scss';

export const MainPage = () => (
  <section className='main-page'>
    <Menu />

    <main>
      <Navigation />
      <div className='content'>список книг</div>
    </main>
  </section>
);
