import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Products from './products';
import { Product } from '../schema';

const productsList: Product[]= [
    {
        id:'1',
        avatar:'testImage',
        description:'iPhone 13',
        name:'iPhone',
        price:'999',
        category:'Electronic',
    }];

test('should render products', () => {
    const openDetailsMock = jest.fn();
  render(<Products allProducts={productsList} openDetails={openDetailsMock} />);
  const productName = screen.getByText(/iPhone/i);
  expect(productName).toBeInTheDocument();

  const price = screen.getByTestId('price');
  expect(price).toBeInTheDocument();

  const imgTag = screen.getByAltText('iPhone 13');
  expect(imgTag).toBeInTheDocument();
});

test('should call openDetails callback', () => {
    const openDetailsMock = jest.fn();
    render(<Products allProducts={productsList} openDetails={openDetailsMock} />);
    const viewButton = screen.getByText(/View/i);
    expect(openDetailsMock).not.toHaveBeenCalled();
    fireEvent.click(viewButton);
    expect(openDetailsMock).toHaveBeenCalledWith('1');
});

test('should not render any products when no data passed', () => {
    const openDetailsMock = jest.fn();
  render(<Products openDetails={openDetailsMock} />);
  const productName = screen.queryByText(/iPhone/i);
  expect(productName).not.toBeInTheDocument();
});