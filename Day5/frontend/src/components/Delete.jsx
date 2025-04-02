import React from 'react';
import axios from 'axios';


const Delete = ({onUserRegistered}) => {

    const handleDelete= async (e)=>{
        e.preventDefault();
        const id=e.target.id.value;
        await axios.delete(`http://localhost:9000/users/${id}`);
        alert(`Entry with ID: ${id} deleted successfully`);
        onUserRegistered();

    }

  return (
    <div>
        <form onSubmit={handleDelete}>
            <input type="text" placeholder='Enter the ID..' name='id' />
            <button type="submit"> DELETE </button>
        </form>
      
    </div>
  )
}

export default Delete;
