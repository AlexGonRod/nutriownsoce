import { API_ENDPOINT } from "./const"

type Product = String;
type Options = String;

export default async function api(product: Product, options: Options) {
    // const endpoint = `${API_ENDPOINT}3017624010701${API_OPTIONS}`
    const endpoint = `${API_ENDPOINT}${product}?fields=${options}`
    console.log(endpoint)
    const res = await fetch(endpoint, {
        method: 'GET',
    })
    const result = await res.json()
    return result;
}
