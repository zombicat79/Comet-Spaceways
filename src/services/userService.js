let baseUrl = '';
const route = '/cometspaceways/api/v1/users';
if (import.meta.env.PROD) {
    baseUrl = 'https://backend.zombiecat.dev'
} else {
    baseUrl = 'http://localhost:3000';
}

async function createUserAccount(userData) {
    try {
        if (import.meta.env.PROD) {
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
        } else {
            const response = await fetch(`${baseUrl}${route}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData),
                credentials: 'include'
            });
            const { data } = await response.json();
            return data[data.length - 1];
        }
    } catch(err) {
        throw new Error(err);
    }
}

async function getUserAccountByUsername(username, pwd) {
    try {
        if (import.meta.env.PROD) {
            let response;
            
            if (pwd) {
                response = await fetch(`${baseUrl}${route}/${username}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ password: pwd }),
                    credentials: 'include'
                });
            } else {
                response = await fetch(`${baseUrl}${route}/${username}`, {
                    credentials: 'include'
                });
            }

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

async function getUserAccountById(id) {
    try {
        if (import.meta.env.PROD) {
            const response = await fetch(`${baseUrl}${route}/${id}`, {
                credentials: 'include'
            });
            const { data } = await response.json();
            return data;
        } else {
            const response = await fetch(`${baseUrl}${route}`);
            const { data } = await response.json();
            const targetUser = data.users.find((user) => user.id === id);
            return targetUser;
        }
    } catch(err) {
        return 'ko';
    }
}

async function updateUserAccount(id, updateBody) {
    try {
        const response = await fetch(`${baseUrl}${route}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateBody),
            credentials: 'include'
        });
        const { data } = await response.json();
        return data;
    } catch(err) {
        throw new Error(err);
    }
}

async function deleteUserAccount(id) {
    try {
        await fetch(`${baseUrl}${route}/${id}`, {
            method: "DELETE",
            credentials: 'include'
        });
    } catch(err) {
        throw new Error(err);
    }
}

export { createUserAccount, getUserAccountByUsername, getUserAccountById, updateUserAccount, deleteUserAccount };