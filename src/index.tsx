import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { MainPage } from './pages/main';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <div className="wrapper">
      <Header />

      <HashRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
        </Routes>
      </HashRouter>

      <Footer />
    </div>
  </React.StrictMode>
);
