import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container } from '@mui/system';
import { Card, Chip, Grid } from '@mui/material';

import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {getProduct} from '../utils/ApiHandler';
import { toAmount } from '../utils/index';
import {Product} from '../schema/index';
import { useErrorHandler } from 'react-error-boundary';

export default function Details() {
    const {productId} = useParams();
    const [productData, setProductData] = useState<Product>();
    const handleError = useErrorHandler();
    useEffect(() => {
        if(productId) {
            getProduct(productId).then((res: any) => {
                setProductData(res.product);
            }).catch((e)=>{
                console.error(e);
                handleError(new Error('Problem while fetch product id '+productId));
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return(
        <>
        {productData && <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={6}>
                    <Card>
                        <CardMedia
                            component="img"
                            image={productData.avatar}
                        />
                    </Card>
                    </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Typography variant="h3">
                        {productData.name}
                    </Typography>
                    <Typography variant="h4">
                        {toAmount(productData.price)}
                    </Typography>
                    <Chip color="primary" variant="outlined" label={productData.category} />
                </Grid>
            </Grid>
            <br />
            <br />
            <hr />
            <Grid container>
                <Grid item xs={12}>
                    {productData.description}
                </Grid>
            </Grid>
            <br />
            <br />
            <Link to="/">Home</Link>
        </Container>}
        </>
    )
}
