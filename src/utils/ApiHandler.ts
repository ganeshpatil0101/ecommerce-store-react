const BASE_URL = 'https://62286b649fd6174ca82321f1.mockapi.io/case-study/'

export function getAllProducts() {
    return fetch(`${BASE_URL}products`).then((response) => {
        return response.json();
    });
}
export function getProduct(productId: string) {
    return fetch(`${BASE_URL}products/${productId}`).then((response) => {
        return response.json();
    });
}
export function getCategories() {
    return fetch(`${BASE_URL}categories`).then((response) => {
        return response.json();
    });
}
export function saveProduct(data: any) {
    return fetch(`${BASE_URL}products`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data),
    }).then((response) => {
        return response.json();
    });
}