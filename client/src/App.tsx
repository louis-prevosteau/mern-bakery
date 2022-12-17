import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Authentication from './pages/Authentication';
import NotFound from './pages/NotFound';
import Products from './pages/Products';
import Profile from './pages/Profile';
import './utils/i18n';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route caseSensitive path='/auth' element={<Authentication/>}/>
        <Route caseSensitive path='/products' element={<Products/>}/>
        <Route caseSensitive path='/products/:id' element={<Products/>}/>
        <Route caseSensitive path='/profile' element={<Profile/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
