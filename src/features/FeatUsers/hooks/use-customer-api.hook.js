import React from "react";


const ENDPOINT = 'http://localhost:5050/users';

const fetchUsers = async () => {
    const response = await fetch(ENDPOINT);
    const data = await response.json();
    return data;
};

/**
 * Hook that fetches the users from the API
 */
export const useCustomerApi = () => {

    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        fetchUsers().then(data => setUsers(data));
    },[])

    return users;
};