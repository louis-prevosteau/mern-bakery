import { Paper } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Addresses from './pages/Addresses';
import Authentication from './pages/Authentication';
import Categories from './pages/Categories';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Product from './pages/Product';
import Products from './pages/Products';
import './utils/i18n';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Paper elevation={5}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route caseSensitive path='/auth' element={<Authentication/>}/>
          <Route caseSensitive path='/products' element={<Products/>}/>
          <Route caseSensitive path='/categories' element={<Categories/>}/>
          <Route caseSensitive path='/products/:id' element={<Product/>}/>
          <Route caseSensitive path='/addresses' element={<Addresses/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Paper>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
