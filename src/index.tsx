import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { Layout } from './components/layout/layout';
import { MainPage } from './pages/main';
import { OffertaPage } from './pages/offerta/offerta-page';
import { RulesPage } from './pages/rules/rules-page';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <div className='wrapper'>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index={true} element={<MainPage />} />
            <Route path='/rules' element={<RulesPage />} />
            <Route path='/offerta' element={<OffertaPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  </React.StrictMode>
);
