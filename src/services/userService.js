import supabase from "../../db/supabase-client";

const baseUrl = import.meta.env.TEST_URL;
const route = import.meta.env.TEST_USER_ROUTE;

async function createUserAccount(userData) {
    try {
        if (import.meta.env.PROD) {
            // Connection to Supabase
            const { data, error } = await supabase
                .from('Users')
                .upsert(userData)
                .select()
                .maybeSingle()

            if (error) return error;
            return data;
        } else {
            // Connection to MongoDB via API REST)
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
          
            // FILE SYSTEM VERSION - OBSOLETE
            /* const response = await fetch(`${baseUrl}${route}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData),
                credentials: 'include'
            });
            const { data } = await response.json();
            return data[data.length - 1]; */
        }
    } catch(err) {
        throw new Error(err);
    }
}

async function getUserAccountByUsername(username, pwd) {
    try {
        if (import.meta.env.PROD) {
            // Connection to Supabase
            const { data, error } = await supabase
                .from('Users')
                .select('*')
                .eq('username', username)
                .eq('password', pwd)
                .maybeSingle();

            if (error) return error;
            return data;
        } else {
            // Connection to MongoDB via API REST)
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

            // FILE SYSTEM VERSION - OBSOLETE
            /* const response = await fetch(`${baseUrl}${route}`);
            const { data } = await response.json();
            const targetUser = data.users.find((user) => user.username === username);
            return targetUser; */
        }
    } catch(err) {
        return 'ko';
    }
}

async function getUserAccountById(id) {
    try {
        if (import.meta.env.PROD) {
            // Connection to Supabase
            const { data, error } = await supabase
                .from('Users')
                .select('*')
                .eq('id', id)
                .maybeSingle();

            if (error) return error;
            return data;
        } else {
            // Connection to MongoDB via API REST)
            const response = await fetch(`${baseUrl}${route}/${id}`, {
                credentials: 'include'
            });
            const { data } = await response.json();
            return data;

            // FILE SYSTEM VERSION - OBSOLETE
            /* const response = await fetch(`${baseUrl}${route}`);
            const { data } = await response.json();
            const targetUser = data.users.find((user) => user.id === id);
            return targetUser; */
        }
    } catch(err) {
        return 'ko';
    }
}

async function getCharacteristicsAvg() {
    try {
        if (import.meta.env.PROD) {
            // Connection to Supabase
            const { data, error } = await supabase.rpc('get_user_averages').maybeSingle();

            if (error) return error;
            return data;
        } else {
            // Connection to MongoDB via API REST)
            const response = await fetch(`${baseUrl}${route}/average-characteristics`);
            const { data } = await response.json();
            return data;
        }
    } catch(err) {
        return 'ko';
    }
}

async function updateUserAccount(id, updateBody) {
    try {
        if (import.meta.env.PROD) {
            // Connection to Supabase
            const { data, error } = await supabase
                .from('Users')
                .update(updateBody)
                .eq('id', id)
                .select()
                .maybeSingle()

            if (error) return error;
            return data;
        } else {
            // Connection to MongoDB via API REST)
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
        }
    } catch(err) {
        throw new Error(err);
    }
}

async function deleteUserAccount(id) {
    try {
        if (import.meta.env.PROD) {
            // Connection to Supabase
            const { error } = await supabase
                .from('Users')
                .delete()
                .eq('id', id)

            if (error) return error;
        } else {
            // Connection to MongoDB via API REST)
            await fetch(`${baseUrl}${route}/${id}`, {
                method: "DELETE",
                credentials: 'include'
            });
        }
    } catch(err) {
        throw new Error(err);
    }
}

export { createUserAccount, getUserAccountByUsername, getUserAccountById, getCharacteristicsAvg, updateUserAccount, deleteUserAccount };