import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Details from './pages/Details';
import AddProduct from './pages/AddProduct';
import {withErrorBoundary} from './pages/ErrorComponent';

import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();

const LayoutWithError = withErrorBoundary(Layout);
const HomeWithError = withErrorBoundary(Home);
const DetailsWithError = withErrorBoundary(Details);
const AddProductWithError = withErrorBoundary(AddProduct);
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<LayoutWithError />}>
              <Route index element={<HomeWithError />} />
              <Route path="details/:productId" element={<DetailsWithError />} />
              <Route path="addproduct" element={<AddProductWithError />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
