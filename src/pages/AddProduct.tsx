import { Button, Grid, Paper, Typography } from '@mui/material';
import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Categories from '../components/categories';
import { Input } from '@mui/material';
import { saveProduct } from '../utils/ApiHandler';
import { useErrorHandler } from 'react-error-boundary';

export default function AddProduct() {
    const navigate = useNavigate();
    const data = useRef<any>({developerEmail:'ganeshpatil0101@gmail.com'});
    const handleError = useErrorHandler();
    const onSelectCategory = (selected: string) => {
        console.log('selected ', selected);
        data.current['category'] = selected;
    }
    const onChangeData = (dataKey: string, value: string) => {
        data.current[dataKey] = value;
    }
    const submitData = (event: any) => {
        if(!data.current.category && data.current.category === '') {
            alert("Please selected category");
        } else {
            saveProduct(data.current).then((res: any)=>{
                console.log(res);
                alert("Product Saved successfully");
                navigate('/');
            }).catch((err) => {
                console.error(err);
                handleError(new Error("Problem while saving product"));
            });
        }
        event.preventDefault();
    }
    return(
        <>
            <Paper style={{ padding: 16 }}>
                <form onSubmit={submitData} >
                    <Grid container alignItems="flex-start" spacing={2}>
                    <Grid item xs={12}>
                            <Typography variant="h3" >
                                Add Product
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Input 
                                fullWidth 
                                type="text"
                                placeholder="Product Name"
                                required   
                                onChange={(event)=>{onChangeData('name', event.target.value)}}
                            />
                        </Grid>
                        <Grid item xs={12}>
                        <Input 
                                fullWidth 
                                type="text"
                                placeholder="Product Description"
                                required   
                                onChange={(event)=>{onChangeData('description', event.target.value)}}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Input 
                                fullWidth 
                                type="url"
                                placeholder="Image URL"
                                required   
                                onChange={(event)=>{onChangeData('avatar', event.target.value)}}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Categories onSelectCategory={onSelectCategory} />
                        </Grid>
                        <Grid item xs={12}>
                            <Input 
                                fullWidth 
                                type="number"
                                placeholder="Price"
                                required   
                                onChange={(event)=>{onChangeData('price', event.target.value)}}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained">Submit</Button>
                        </Grid>
                        </Grid>
                        </form>
                </Paper>
            <br />
            <br />
            <Link to="/">Home</Link>
        </>
    )
}
