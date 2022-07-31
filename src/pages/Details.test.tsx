import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Details from './Details';
import { BrowserRouter } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
        'productId': '1'
    }),
}));

test('should render details page', async () => {
    // @ts-ignore
    jest.spyOn(window, "fetch").mockResolvedValue({
        json: async () => ({
            product:{
                name:'iPhone', 
                price:'999', 
                description:'my phone 13 with 128 GB'
            }
        }),
      });
    render(<>
    <BrowserRouter>
        <Details/>
    </BrowserRouter>
    </>);
    await waitFor(() => {
        const heading = screen.getByText(/iPhone/);
        expect(heading).toBeInTheDocument();
        const price = screen.getByText(/999.00/i);
        expect(price).toBeInTheDocument();
        const description = screen.getByText(/my phone/i);
        expect(description).toBeInTheDocument();
    });
});