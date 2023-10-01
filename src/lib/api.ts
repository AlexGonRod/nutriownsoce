import { API_ENDPOINT } from "./const"

type Product = String;
type Options = String;

export default async function api(product: Product, options: Options) {
    const endpoint = `${API_ENDPOINT}${product}?fields=${options}`
    const res = await fetch(endpoint, {
        method: 'GET',
    })
    const result = await res.json()
    return result;
}
