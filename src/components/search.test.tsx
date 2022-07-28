import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import SearchBar from './search';
import { Product } from '../schema';

const originalFetch = global.fetch;
let container: any = null;
// beforeEach(() => {
//     global.fetch = jest.fn(() => Promise.resolve({
//         json: () => Promise.resolve([{id:'1', category: 'Electronic'}])
//     })) as any;
//     container = document.createElement('div');
// });
// afterEach(() => {
//     global.fetch = originalFetch as any;
//     container.remove();
//     container = null;
// })

test('should render search bar', () => {
    const onSelectCategoryMock = jest.fn();
    const onProductSearchMock = jest.fn();
    
    render(<SearchBar onSelectCategory={onSelectCategoryMock} onProductSearch={onProductSearchMock} />);
    const inputLabel = screen.getByText(/Search Product/i);
    expect(inputLabel).toBeInTheDocument();
    const selectLabel = screen.getByText(/Search Category/i);
    expect(selectLabel).toBeInTheDocument();
});

test('should call product search callback', () => {
    const onSelectCategoryMock = jest.fn();
    const onProductSearchMock = jest.fn();    
    const res = render(<SearchBar onSelectCategory={onSelectCategoryMock} onProductSearch={onProductSearchMock} />);
    const input = res.container.querySelector('#search');
    if(input) {
        fireEvent.change(input, {target:{value:'iPhone'}});
        expect(input).toBeInTheDocument();
        expect(onProductSearchMock).toHaveBeenCalledWith('iPhone');
    }
});

// test('should render categories', async () => {
//     // jest.spyOn(window, "fetch").mockResolvedValue({
//     //     json: async () => ([{id:'1', category: 'Electronic123'}]),
//     //   });
//     const onSelectCategoryMock = jest.fn();
//     const onProductSearchMock = jest.fn();    
//         // act(()=>{
//           const res =  render(<SearchBar onSelectCategory={onSelectCategoryMock} onProductSearch={onProductSearchMock} />);
//     //    })
//     await waitFor(() => {
//         const categoryLabel = res.container.querySelectorAll('input.MuiSelect-nativeInput');
//         console.log(categoryLabel);
//         fireEvent.click(categoryLabel[0]);
//         expect(categoryLabel[0]).toBeInTheDocument();
//     });
// });