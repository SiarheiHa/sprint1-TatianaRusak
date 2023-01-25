import React from 'react';
import { nanoid } from 'nanoid';

import { BookCard } from '../../components/book-card/book-card';
// import { Menu } from '../../components/menu/menu';
import { Navigation } from '../../components/navigation/navigation';
import { IBook } from '../../types';
import books from '../../utils/books.json';

import './main-page.scss';

export const MainPage = () => (
  // <section className='main-page'>
  // {/* <Menu /> */}

  <main>
    <Navigation />
    <div className='content'>
      {books.map((book: IBook) => {
        return <BookCard book={book} key={nanoid()} />;
      })}
    </div>
  </main>
  // </section>
);
