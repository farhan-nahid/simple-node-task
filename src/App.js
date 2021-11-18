import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './components/AddProduct/AddProduct';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ManageProduct from './components/ManageProduct/ManageProduct';
import NotFound from './components/NotFound/NotFound';
import UpdateProduct from './components/UpdateProduct/UpdateProduct';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/add-product' element={<AddProduct />} />
        <Route path='/manage-product' element={<ManageProduct />} />
        <Route path='/update-product/:id' element={<UpdateProduct />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
