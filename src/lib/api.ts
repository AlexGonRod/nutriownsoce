import { API_ENDPOINT, API_OPTIONS, API_SEARCH, API_OPTIONS_SEARCH } from "./const"

type Product = String;

export default async function api(product: Product) {
    // const endpoint = `${API_ENDPOINT}3017624010701${API_OPTIONS}`
    const endpoint = `${API_ENDPOINT}${product}${API_OPTIONS}`
    const res = await fetch(endpoint, {
        method: 'GET',
    })
    const result = await res.json()
    return result;
}
