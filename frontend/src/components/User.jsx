import { useEffect, useState } from "react"
import API_URL from "./config";



function User() {
const [users, setUsers] = useState();

useEffect(() => {

let isMounted = true;
const controller = new AbortController();

const getUsers = async () => {

    try {
        const response = await axios.get()
    } catch (error) {
        
    }
}


},[])

  return (
    <article>
        <h2>
            Users List</h2>
                       
   {users?.length ? (<ul>  {users.map((user,i) => <li key={i}>{user?.username} </li>) }  </ul>
                       ) : <p>No users</p> }  


    </article>
  )
}

export default User