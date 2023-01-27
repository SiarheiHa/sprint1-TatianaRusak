import React from 'react';
import { nanoid } from 'nanoid';

import { BookCard } from '../../components/book-card/book-card';
import { Navigation } from '../../components/navigation/navigation';
import booksStore from '../../utils/books.json';

import './main-page.scss';

export const MainPage = () => {
  const books = Object.values(booksStore)[0];

  return (
    <main>
      <Navigation />
      <ul className='content'>
        {books.map((book) => {
          return <BookCard book={book} key={nanoid()} />;
        })}
      </ul>
    </main>
    // </section>
  );
};
