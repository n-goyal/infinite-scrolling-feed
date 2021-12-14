
import { useEffect, useState } from "react";
import { fetchUsers } from '../api/user';

export default function useLoadUsers () {
    const [users, setUsers] = useState([]);

    useEffect(async () => {
        try {
            const data = await fetchUsers();
            console.log(data);
            setUsers(data);
        } catch (error) {
            console.error(error)
        }

    }, [])

    
}