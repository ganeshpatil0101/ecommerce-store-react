export interface Product {
    _id: string;
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
export interface SearchBarProps {
    onSelectCategory: Function;
    onProductSearch: Function;
}
export interface CategoriesProps{
    onSelectCategory: Function;
}
export interface Category{
    _id: string;
    name: string;
}
