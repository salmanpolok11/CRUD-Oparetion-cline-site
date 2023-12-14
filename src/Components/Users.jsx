import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Users = () => {

  const usersloder = useLoaderData()
  const [ users , setUsers] = useState(usersloder)

  const handledelete = _id =>{
     console.log(_id);

     fetch(`http://localhost:5000/users/${_id}` , {
       method: 'DELETE'
     })
     .then( res => res.json())
     .then( data => {
       console.log(data);
       if( data. deletedCount > 0){
         alert( 'Your Delete Is Successful')
         const remeening = users.filter( user => user._id !== _id)
         setUsers( remeening)
       }
     })
  }



  return (
    <div>
       <h1>All Users Here {users.length} </h1>
           {
             users.map( user => <p key={user._id}> {user.name} : {user.email} : { user._id}
              <Link to={`/users/${user._id}`} >
                        <button>Update</button>
              </Link>
             <button onClick={ () => handledelete(user._id)}>X</button>
              </p>)
           }
    </div>
  );
};

export default Users;