import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './pages/Layout';
import Album from './pages/Album';
import Home from './pages/Home';
import Details from './pages/Details';
import AddProduct from './pages/AddProduct';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="details/:productId" element={<Details />} />
            <Route path="album" element={<Album />} />
            <Route path="addproduct" element={<AddProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
