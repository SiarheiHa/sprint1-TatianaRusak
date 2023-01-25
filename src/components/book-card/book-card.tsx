import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import bookCover from '../../assets/images/book.jpg';
import { IBook } from '../../types';
import { Rating } from '../rating/rating';

import './book-card.scss';

type BookCardProps = {
  book: IBook;
  key: string;
};

export const BookCard = ({ book, key }: BookCardProps) => {
  const bookedTill = `Заната до 24.05`;

  return (
    <div className='book' key={key}>
      <img src={bookCover} alt='book cover' className='book__image' />

      <Rating rate={3} />

      <div className='book__name'>
        <div className='book__title'>{book.title} </div>
        <div className='book__author'>
          {book.author}, {book.year}
        </div>
      </div>
      {!book.isBooked && (
        <button type='button' className='book__reserve no-booked'>
          Забронировать
        </button>
      )}

      {book.isBooked && !book.bookedTill && (
        <button type='button' className='book__reserve is-booked'>
          Забронирована
        </button>
      )}

      {book.isBooked && book.bookedTill && (
        <button type='button' className='book__reserve is-booked-till'>
          {bookedTill}
        </button>
      )}
    </div>
  );
};
