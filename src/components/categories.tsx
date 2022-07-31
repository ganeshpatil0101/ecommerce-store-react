import React, {useEffect, useState} from 'react';
import { getCategories } from '../utils/ApiHandler';

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import {Category, CategoriesProps} from '../schema/index';
import { useErrorHandler } from 'react-error-boundary';

function Categories({onSelectCategory}: CategoriesProps) {
    const [categories, setCategories] = useState<Category[]>([]);
    const [cat, setCat] = useState('');
    const handleError = useErrorHandler();
    useEffect(()=>{
        getCategories().then((res: any)=>{
            setCategories(res.categories);
        }).catch((e)=>{
            console.error(e);
            handleError(new Error("Problem while fetching categories"));
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                    <em>All</em>
                </MenuItem>
                {categories && categories.map((category)=>{
                    return (<MenuItem key={category._id} value={category.name}>{category.name}</MenuItem>)
                })}
                </Select>
            </FormControl>
    </>
    );
}
export default React.memo(Categories);