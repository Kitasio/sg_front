export async function get({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    return {
        status: 200,
        body: {
            metadata: res.ok && (await res.json())
        }
    }
}