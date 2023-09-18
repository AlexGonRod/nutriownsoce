import { API_ENDPOINT, API_OPTIONS } from "./const"

export default async function api() {
    const endpoint = `${API_ENDPOINT}3017624010701${API_OPTIONS}`
    const res = await fetch(endpoint, {
        method: 'GET',
    })
    const result = await res.json()
    return result;
}
