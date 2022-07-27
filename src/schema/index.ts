export interface Product {
    id: string;
    avatar: string;
    description: string;
    name: string;
    price:string
    category: string;
}

export interface ProductsProps { 
    allProducts?: Product[];
    openDetails: Function;
}
export interface CategoriesProps {
    onSelectCategory: Function;
    onProductSearch: Function;
}
export interface Category{
    id: string;
    name: string;
}
