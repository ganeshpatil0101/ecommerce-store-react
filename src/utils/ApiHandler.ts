import CacheData, {ClearData} from './cacheDataDecorator';

const BASE_URL = 'https://upayments-studycase-api.herokuapp.com/api/'
const HEADERS = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdhbmVzaHBhdGlsMDEwMUBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vZ2FuZXNocGF0aWwwMTAxIiwiaWF0IjoxNjU5MjY2NzE2LCJleHAiOjE2NTk2OTg3MTZ9.Hm2IQNg6mPOKJuP93VmG-dcHfWPZIBrIaiVz1Qt5yRs'
}
export default class ApiHandler {
    @CacheData()
    static getAllProducts() {
        return fetch(`${BASE_URL}products`,{
            method: 'GET',
            mode:'cors',
            headers: {
                ...HEADERS,
            },
        }).then((response) => {
            return response.json();
        });
    }
    
    @CacheData()
    static getProduct(productId: string) {
        return fetch(`${BASE_URL}products/${productId}`,{
            method: 'GET',
            mode:'cors',
            headers: {
                ...HEADERS,
            },
        }).then((response) => {
            return response.json();
        });
    }

    @CacheData()
    static getCategories() {
        return fetch(`${BASE_URL}categories`,{
            method: 'GET',
            headers: {
                ...HEADERS,
            },
        }).then((response) => {
            return response.json();
        });
    }
    
    @ClearData('getAllProducts')
    static saveProduct(data: any) {
        return fetch(`${BASE_URL}products`, {
            method: 'post',
            headers: {
                ...HEADERS,
            },
            body: JSON.stringify(data),
        }).then((response) => {
            return response.json();
        });
    }
}
