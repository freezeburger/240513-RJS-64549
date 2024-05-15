import React, { useContext } from "react";
import { ApiUsersContext } from "@contexts";

const fetchUsers = async ( url ) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

/**
 * Hook that fetches the users from the API
 */
export const useCustomerApi = () => {

    const ENDPOINT = useContext(ApiUsersContext);

    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        fetchUsers(ENDPOINT).then(data => setUsers(data));
    },[])

    return users;
};