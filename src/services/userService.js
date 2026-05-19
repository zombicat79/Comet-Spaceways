const baseUrl = 'http://localhost:3000/cometspaceways/api/v1/users';

async function createUserAccount(userData) {
    try {
        const response = await fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData)
        });
        const data = await response.json();
        return data;
    } catch(err) {
        console.log(err);
    }
}

export { createUserAccount };