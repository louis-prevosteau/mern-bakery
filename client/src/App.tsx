import { Paper } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Authentication from './pages/Authentication';
import Categories from './pages/Categories';
import NotFound from './pages/NotFound';
import Product from './pages/Product';
import Products from './pages/Products';
import Profile from './pages/Profile';
import './utils/i18n';

const App = () => {
  return (
    <BrowserRouter>
      <Paper elevation={5}>
        <Routes>
          <Route path='/' element={<Products/>}/>
          <Route caseSensitive path='/auth' element={<Authentication/>}/>
          <Route caseSensitive path='/products' element={<Products/>}/>
          <Route caseSensitive path='/categories' element={<Categories/>}/>
          <Route caseSensitive path='/products/:id' element={<Product/>}/>
          <Route caseSensitive path='/profile' element={<Profile/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Paper>
    </BrowserRouter>
  );
};

export default App;
