import type { APIRoute } from "astro";
import { API_ADVANCE_INFO, API_BASIC_INFO } from "../../lib/const"
import api from '../../lib/api'

export const POST: APIRoute = async ({ request }) => {
    const formData = await request.formData()
    const input = formData.get('product');
    if (!input) {
        return new Response(
            JSON.stringify({
                message: "Missing required fields",
            }),
            { status: 400 }
        );
    }

    const productInfo = await api(`${input}`, API_BASIC_INFO);
    const scores = await api(`${input}`, API_ADVANCE_INFO);

    return new Response(
        JSON.stringify({ success: true, productInfo, scores }),
        { status: 200 }
    );
}

export async function getFromBarcode(value: string) {
    const productInfo = await api(`${value}`, API_BASIC_INFO);
    const scores = await api(`${value}`, API_ADVANCE_INFO);

    return { success: true, productInfo, scores }
}
