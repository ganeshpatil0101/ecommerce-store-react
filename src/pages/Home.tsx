import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Products from '../components/products';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import {getAllProducts} from '../utils/ApiHandler';
import SearchBar from '../components/search';
import {Product} from '../schema/index';
import Loader from '../components/loader';

export default function Home() {
    const navigate = useNavigate();
    const [products, setProducts] = useState<Product[]>([]);
    const productCopy = useRef<Product[]>([]);
    const [loader, setLoader] = useState(false);
    useEffect(()=>{
        setLoader(true);
        getAllProducts().then((data: any)=>{
            setProducts(data.products);
            productCopy.current = data.products;
            setLoader(false);
        }).catch(e => console.error(e));
    }, []);
    const openDetails = (id: string) => {
        navigate(`details/${id}`)
    }
    const searchByCategory = (category: string) => {
        if(category) {
            const filteredProduct = productCopy.current.filter((prod) => prod.category === category);
            setProducts(filteredProduct);
        } else {
            setProducts(productCopy.current);
        }
    }
    const searchByProduct = (productText: string) => {
        console.log(productText);
        if(productText) {
            const filteredProduct = productCopy.current.filter((prod) => prod.name.toLowerCase().includes(productText.toLowerCase()));
            setProducts(filteredProduct);
        } else {
            setProducts(productCopy.current);
        }
    }
    const openAddProduct = () => {
        navigate('addproduct')
    }
    return(
        <>  
            {loader && <Loader />}
            {!loader && <SearchBar onSelectCategory={searchByCategory} onProductSearch={searchByProduct} />}
            {(!loader && products.length > 0 )
                  ?
                <>
                    <Products allProducts={products} openDetails={openDetails} />
                        <div className="floatingBtn" onClick={openAddProduct}>
                            <Fab size="medium" color="primary" aria-label="add">
                                <AddIcon />
                            </Fab>
                        </div>
                </>
                : <p> No Products Found </p>
            }
        </>
    )
}
