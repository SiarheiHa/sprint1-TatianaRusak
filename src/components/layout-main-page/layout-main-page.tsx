import React from 'react';
import { Outlet } from 'react-router-dom';

// import { Footer } from '../footer/footer';
// import { Header } from '../header/header';
import { Menu } from '../menu/menu';

export const LayoutMainPage = () => {
  return (
    <section className='main-page'>
      <Menu />
      <Outlet />
    </section>
  );
};
