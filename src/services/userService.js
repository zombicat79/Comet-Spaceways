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
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData),
            credentials: 'include'
        });
        const { data } = await response.json();
        return data;
    } catch(err) {
        throw new Error(err);
    }
}

async function getUserAccount(username) {
    try {
        if (import.meta.env.PROD) {
            const response = await fetch(`${baseUrl}${route}/${username}`, {
                credentials: 'include'
            });
            const { data } = await response.json();
            return data;
        } else {
            const response = await fetch(`${baseUrl}${route}`);
            const { data } = await response.json();
            const targetUser = data.users.find((user) => user.username === username);
            return targetUser;
        }
    } catch(err) {
        return 'ko';
    }
}

async function updateUserAccount() {
    console.log('updated')
}

export { createUserAccount, getUserAccount, updateUserAccount };