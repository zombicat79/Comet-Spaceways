let baseUrl = '';
const route = '/cometspaceways/api/v1/users';
if (import.meta.env.PROD) {
    baseUrl = 'https://backend.zombiecat.dev'
} else {
    baseUrl = 'http://localhost:3000';
}

async function createUserAccount(userData) {
    try {
        const response = await fetch(`${baseUrl}${route}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData)
        });
        const { data } = await response.json();
        return data;
    } catch(err) {
        throw new Error(err);
    }
}

export { createUserAccount };