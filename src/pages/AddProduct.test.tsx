import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AddProduct from './AddProduct';

// jest.mock('../utils/ApiHandler', () => ({
//     ...jest.requireActual('../utils/ApiHandler'),
//     saveProduct: jest.fn(),
// }));
test('should render Add Product page', () => {
    render(<><BrowserRouter><AddProduct  /></BrowserRouter></>);
    const title = screen.getByText(/Add Product/i);
    expect(title).toBeInTheDocument();
});
test('should call onSubmit with given data', () => {
    render(<><BrowserRouter><AddProduct  /></BrowserRouter></>);
    const name=  screen.getByPlaceholderText('Product Name');
    expect(name).toBeInTheDocument();
    // TODO
});
