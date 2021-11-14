import { useEffect, useState } from "react";


function UserList() {
    const [users, setUsers] = useState(null);

    const fetchUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
    }

    useEffect(() => {
        fetchUsers()
    }, []);

    return (
        <div>
            <h3>User List</h3>

            <hr />

            <ul>
                {
                    users ? 
                    users.map(user => <li>{user.name}</li>) :
                    <h1>...Loading</h1>
                }
            </ul>
        </div>
    )
}

export default UserList;
