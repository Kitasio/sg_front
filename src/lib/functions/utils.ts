const jsonEndpoint = (id) => {
    return `http://localhost:7878/json/${id}.json`
}
// TRY A SERVER ENDPOINT!!!
export const extractImagesFromJson = async (ids) => {
    for (let i = 0; i < ids.length; i++) {
        const id = ids[i];
        let res = await fetch(jsonEndpoint(id), {
            mode: 'cors',
            method: 'GET',
        })
        console.log("the json is: ", await res.json())
    }
}
