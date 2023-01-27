import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { Layout } from './components/layout/layout';
import { LayoutMainPage } from './components/layout-main-page/layout-main-page';
import { BookPage } from './pages/book';
import { MainPage } from './pages/main';
import { OffertaPage } from './pages/offerta/offerta-page';
import { RulesPage } from './pages/rules/rules-page';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<LayoutMainPage />}>
            <Route index={true} element={<MainPage />} />
            <Route path='/books' element={<MainPage />} />
            <Route path='/books/:category' element={<MainPage />} />
            <Route path='rules' element={<RulesPage />} />
            <Route path='offerta' element={<OffertaPage />} />
          </Route>
          <Route path='books/:category/:bookId' element={<BookPage />} />
          {/* <Route path='profile' element={<Profile />} /> */}
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
