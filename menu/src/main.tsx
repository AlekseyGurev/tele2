import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { MainPage } from './pages/mainPage/MainPage.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Page } from './pages/page/Page.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="1" element={<Page />} />
          <Route path="2" element={<Page />} />
          <Route path="3" element={<Page />} />
          <Route path="4" element={<Page />} />
          <Route path="5" element={<Page />} />
          <Route path="6" element={<Page />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
