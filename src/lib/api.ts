import { API_ENDPOINT } from "./const"

type Product = String;
type Options = String;

export default async function api(product: Product, options: Options) {
    const endpoint = `${API_ENDPOINT}${product}?fields=${options}`

    try {
        const res = await fetch(endpoint, {
            method: 'GET',
        })
        const result = await res.json()
        return result;

    } catch (error) {
        throw new Error(`error getting data: ${error}`)
    }
}
