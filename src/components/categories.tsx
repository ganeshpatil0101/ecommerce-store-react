import React, {useEffect, useState} from 'react';
import { getCategories } from '../utils/ApiHandler';

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import {Category, CategoriesProps} from '../schema/index';

export default function Categories({onSelectCategory}: CategoriesProps) {
    const [categories, setCategories] = useState<Category[]>([]);
    const [cat, setCat] = useState('');
    useEffect(()=>{
        getCategories().then((res)=>{
            setCategories(res);
        }).catch((err)=>{console.error(err)});
    }, []);

    const handleChange = (event: any):void => {
        setCat(event.target.value);
        onSelectCategory(event.target.value);
    };

    return (
        <>
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
                <MenuItem value="TEst">Test</MenuItem>
                {categories && categories.map((category)=>{
                    return (<MenuItem key={category.id} value={category.name}>{category.name}</MenuItem>)
                })}
                </Select>
            </FormControl>
    </>
    );
}