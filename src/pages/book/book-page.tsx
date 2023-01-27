import React from 'react';

import bookCover from '../../assets/images/book.jpg';
import User from '../../assets/images/user.jpg';
import { Rating } from '../../components/rating/rating';

import './book-page.scss';
// import { IBook } from '../../types';

export const BookPage = () => {
  const book = {
    id: '63ca7627f79ebdac69926ffc',
    image: 'http://www.google.com/image.jpg',
    category: 'business',
    author: 'Адитья Бхаргава',
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих',
    rating: 3,
    year: 2019,
    isBooked: true,
    bookedTill: '2024-11-09T05:28:02 -03:00',
  };

  const bookedTillDate = new Date(Date.parse(book.bookedTill.split(' ')[0])).getDate();
  const bookedTillMonth = new Date(Date.parse(book.bookedTill.split(' ')[0])).getMonth() + 1;
  const bookedTill = `занята до ${bookedTillDate}.${bookedTillMonth}`;

  return (
    <section className='book-page'>
      <div className='book-page__breadcrumbs'>
        <div className='wrapper'>
          <span>Катеригория</span> / <span>{book.title}</span>
        </div>
      </div>
      <div className='wrapper'>
        <div className='book-page__book-info'>
          <img className='book-page__book-cover' src={bookCover} alt='book over' />
          <div className='book-page__book-about'>
            <div className='book-page__title'>{book.title} </div>
            <div className='book-page__author'>
              {book.author}, {book.year}
            </div>
            <div className='book-page__reserve-button'>
              {!book.isBooked && (
                <button type='button' className='no-booked'>
                  Забронировать
                </button>
              )}

              {book.isBooked && !book.bookedTill && (
                <button type='button' className='is-booked'>
                  Забронирована
                </button>
              )}

              {book.isBooked && book.bookedTill && (
                <button type='button' className='is-booked-till'>
                  {bookedTill}
                </button>
              )}
            </div>
            <div className='book-page__description'>
              <h5 className='book-page__description-title'>О книге</h5>
              <div className='book-page__description-text'>
                <p>
                  Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были
                  кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального
                  Кнута, изучить многостраничные фолианты c доказательствами и обоснованиями, но хотите ли вы тратить на
                  это свое время?
                </p>
                <p>
                  Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать
                  алгоритмы — это веселое и увлекательное занятие.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='book-page__additional-info additional'>
          <div className='additional__rating'>
            <h5 className='additional__title'>Рейтинг</h5>
            <div className='additional__rate-stars'>
              <Rating rate={book.rating} />
              <span>{book.rating}</span>
            </div>
          </div>
          <div className='additional__details'>
            <h5 className='additional__title'>Подробная информация</h5>
            <div className='additional__properties'>
              <p className='additional__prop'>
                <span className='additional__prop-name'>Издательство</span>
                <span className='additional__prop-value'>Питер</span>
              </p>
              <p className='additional__prop'>
                <span className='additional__prop-name'>Год издания</span>
                <span className='additional__prop-value'>2019</span>
              </p>
              <p className='additional__prop'>
                <span className='additional__prop-name'>Страниц</span>
                <span className='additional__prop-value'>288</span>
              </p>
              <p className='additional__prop'>
                <span className='additional__prop-name'>Переплет</span>
                <span className='additional__prop-value'>Мягкая обложка</span>
              </p>
              <p className='additional__prop'>
                <span className='additional__prop-name'>Формат</span>
                <span className='additional__prop-value'>70x100</span>
              </p>
              <p className='additional__prop'>
                <span className='additional__prop-name'>Жанр</span>
                <span className='additional__prop-value'>Компьютерная литература</span>
              </p>
              <p className='additional__prop'>
                <span className='additional__prop-name'>Вес</span>
                <span className='additional__prop-value'>370 г</span>
              </p>
              <p className='additional__prop'>
                <span className='additional__prop-name'>ISBN</span>
                <span className='additional__prop-value'>978-5-4461-0923-4</span>
              </p>
              <p className='additional__prop'>
                <span className='additional__prop-name'>Изготовитель</span>
                <span className='additional__prop-value'>
                  ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29
                </span>
              </p>
            </div>
          </div>
          <div className='additional__feedbacks'>
            <h5 className='additional__title'>
              Отзывы <span>2</span>
            </h5>
            <ul className='feedback__list'>
              <li className='feedback__item'>
                <div className='feedback__user'>
                  <img className='feedback__avatar' src={User} alt='user avatar' />
                  <p className='feedback__name'>Иван Иванов</p>
                  <p className='feedback__date'>5 января 2019</p>
                </div>
                <div className='feedback__rating'>
                  <Rating rate={4} />
                </div>
                <div className='feedback__text' />
              </li>
              <li className='feedback__item'>
                <div className='feedback__user'>
                  <img className='feedback__avatar' src={User} alt='' />
                  <p className='feedback__name'>Николай Качков</p>
                  <p className='feedback__date'>20 июня 2018</p>
                </div>
                <div className='feedback__rating'>
                  <Rating rate={4} />
                </div>
                <div className='feedback__text'>
                  Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не
                  оставляет шанса для анализа существующих паттернов поведения. Для современного мира внедрение
                  современных методик предоставляет широкие возможности для позиций, занимаемых участниками в отношении
                  поставленных задач. Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы будут
                  в равной степени предоставлены сами себе. Вот вам яркий пример современных тенденций — глубокий
                  уровень погружения создаёт предпосылки для своевременного выполнения сверхзадачи. И нет сомнений, что
                  акционеры крупнейших компаний, инициированные исключительно синтетически, превращены в посмешище, хотя
                  само их существование приносит несомненную пользу обществу.
                </div>
              </li>
              <li className='feedback__item'>
                <div className='feedback__user'>
                  <img className='feedback__avatar' src={User} alt='user avatar' />
                  <p className='feedback__name'>Екатерина Беляева</p>
                  <p className='feedback__date'>18 февраля 2018</p>
                </div>
                <div className='feedback__rating'>
                  <Rating rate={3} />
                </div>
                <div className='feedback__text' />
              </li>
            </ul>
          </div>
          <button type='button' className='book-page__rate-btn'>
            оценить книгу
          </button>
        </div>
      </div>
    </section>
  );
};
