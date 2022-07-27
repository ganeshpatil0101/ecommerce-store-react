import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { getCategories } from '../utils/ApiHandler';
import {Category, CategoriesProps} from '../schema/index';

export default function SearchBar({onSelectCategory, onProductSearch}:CategoriesProps) {
    const [categories, setCategories] = useState<Category[]>([]);
    const [productText, setProductText] = useState('');
    const [cat, setCat] = useState('');

    const handleChange = (event: any):void => {
        setCat(event.target.value);
        onSelectCategory(event.target.value);
    };
    const searchProduct = (event: any):void => {
        setProductText(event.target.value);
        onProductSearch(event.target.value);
    }
    useEffect(()=>{
        getCategories().then((res)=>{
            console.log("res --> ", res);
            setCategories(res);
        }).catch((err)=>{console.error(err)});
    }, []);

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
            <FormControl fullWidth variant="standard">
                <InputLabel id="category-label">Search Category</InputLabel>
                <Select 
                    value={cat}
                    labelId="category-label" id="category"
                    onChange={handleChange}
                    label="Search Category">
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {categories && categories.map((category)=>{
                    return (<MenuItem key={category.id} value={category.name}>{category.name}</MenuItem>)
                })}
                </Select>
            </FormControl>
            </Grid>
        </Grid>
        <br /><br />

        </>
    )
}