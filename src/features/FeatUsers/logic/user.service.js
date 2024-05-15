

export const fetchUsers = async ( url = import.meta.env.VITE_ENDPOINT_USERS ) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};