import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Products from '../components/products';
import {getAllProducts} from '../utils/ApiHandler';
import SearchBar from '../components/search';
import {Product} from '../schema/index';
import Loader from '../components/loader';

export default function Home() {
    const navigate = useNavigate();
    const [products, setProducts] = useState<Product[]>([]);
    const productCopy = useRef<Product[]>([]);
    useEffect(()=>{
        getAllProducts().then((data)=>{
            setProducts(data);
            productCopy.current = data;
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
    return(
        <>  
            {products.length === 0 && <Loader />}

            {products.length > 0 
                &&    
                <>
                    <SearchBar onSelectCategory={searchByCategory} onProductSearch={searchByProduct} />
                    <Products allProducts={products} openDetails={openDetails} />
                </>
            }
        </>
    )
}
