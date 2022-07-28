import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import { SearchBarProps} from '../schema/index';
import Categories from './categories';

export default function SearchBar({onSelectCategory, onProductSearch}:SearchBarProps) {
    const [productText, setProductText] = useState('');
    const searchProduct = (event: any):void => {
        setProductText(event.target.value);
        onProductSearch(event.target.value);
    }
    return (
        <>
        <Grid container className="search-bar" spacing={1}>
            <Grid item xs={12} sm={6} >
                <TextField 
                    fullWidth  
                    id="search" 
                    value={productText}
                    label="Search Product" 
                    variant="standard"
                    onChange={searchProduct} />
                
            </Grid>
            <Grid item xs={12} sm={6}>
                <Categories onSelectCategory={onSelectCategory} />
            </Grid>
        </Grid>
        <br /><br />

        </>
    )
}