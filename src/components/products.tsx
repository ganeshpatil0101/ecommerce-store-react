import React from 'react';
import { Card, Grid } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { toAmount } from '../utils/index';
import {ProductsProps, Product} from '../schema/index';


export default function Products({allProducts, openDetails}:ProductsProps) {
    return (
          <Grid container spacing={3}>
            {allProducts && allProducts.map((product: Product) => (
              <Grid item key={`${product._id}-${product.name}`} xs={12} sm={6} md={3}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    className={'product-image'}
                    component="img"
                    height="300"
                    image={product.avatar}
                    alt={product.description}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography>
                      {product.name}
                    </Typography>
                  </CardContent>
                  <CardActions style={{justifyContent: 'space-around'}}>
                    <Typography data-testid="price">
                      {toAmount(product.price)}
                    </Typography>
                    <Button size="small" onClick={()=> openDetails(product._id)}>View</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
    )
}