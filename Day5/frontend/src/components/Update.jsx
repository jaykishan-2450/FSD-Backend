import React from 'react';
import axios from 'axios';


const Update = ({onUserRegistered}) => {

    const handleUpdate= async (e)=>{
        e.preventDefault();
        const id=e.target.id.value;
        const name=e.target.name.value;
        const age=e.target.age.value;
        const data={name,age}


        await axios.put(`https://fsd-backend-afns.onrender.com/users/${id}`,data);
        alert(`Entry with ID: ${id} Updated successfully`);
        onUserRegistered();

    }

  return (
    <div>
        <form onSubmit={handleUpdate}>
            <input type="text" placeholder='Enter the ID..' name='id' />
            <input type="text" placeholder='Enter the Name..' name='name' />
            <input type="text" placeholder='Enter the Age..' name='age' />
            <button type="submit"> Update </button>
        </form>
      
    </div>
  )
}

export default Update;
