import { useLoaderData } from "react-router-dom";

const User = () => {
  const users = useLoaderData()

  const handleUpdate = e => {
      e.preventDefault()
      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      const update = { name , email , password}
      console.log(update);

      fetch(`http://localhost:5000/users/${users._id}`, {
         method: 'PUT',
         headers: {
           'content-type': 'application/json'
         },
         body: JSON.stringify(update)
      })
      .then( res => res.json())
      .then( data => {
         console.log(data);
         if( data.modifiedCount > 0){
           alert( 'Your Upadate Successful')
         }
      })


  }

  return (
    <div>
                 <h1>Update of {users.name} </h1>
                 <form onSubmit={handleUpdate} > 
                       <input type="text" name="name" defaultValue={users.name} id="" /> <br />
                      <input type="email" name="email" defaultValue={users.email} id="" /> <br />
                      <input type="text" name="password" defaultValue={users.password} id="" /> <br />
                      <input type="submit" value="Add User" />
                 </form>
    </div>
  );
};

export default User;