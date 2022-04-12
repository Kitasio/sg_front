export async function get({ params }) {
    const res = await fetch(`https://api.soulgenesis.art/json/${params.id}.json`)
    return {
        status: 200,
        body: {
            metadata: res.ok && (await res.json())
        }
    }
}