import { Paper } from '@mui/material';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Bakeries from './pages/Bakeries';
import Authentication from './pages/Authentication';
import Categories from './pages/Categories';
import NotFound from './pages/NotFound';
import Product from './pages/Product';
import Products from './pages/Products';
import Schedules from './pages/Schedules';
import './utils/i18n';
import Profile from './pages/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Paper elevation={5}>
        <Routes>
          <Route path='/' element={<Navigate to='/products'/>}/>
          <Route caseSensitive path='/auth' element={<Authentication/>}/>
          <Route caseSensitive path='/products' element={<Products/>}/>
          <Route caseSensitive path='/categories' element={<Categories/>}/>
          <Route caseSensitive path='/products/:id' element={<Product/>}/>
          <Route caseSensitive path='/addresses' element={<Bakeries/>}/>
          <Route caseSensitive path='/schedules' element={<Schedules/>}/>
          <Route caseSensitive path='/profile' element={<Profile/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Paper>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
