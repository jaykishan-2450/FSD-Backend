import React, { useState, useEffect } from "react";
import axios from "axios";
import "./View.css";
import Register from "./Register";
import Delete from './Delete';
import Update from './Update';

const View = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    viewData();
  }, []);

  const viewData = async () => {
    const res = await axios.get("https://fsd-backend-afns.onrender.com/users");
    console.log(res);
    setUsers(res.data);
  };
  return (
    <div>
      <Register onUserRegistered={viewData} />
      
      <center><h2>UPDATE A USER:</h2></center>
      <Update onUserRegistered={viewData}/>

      <center><h2>DELETE A USER:</h2></center>
      <Delete onUserRegistered={viewData}/>

      <center><h2>-- CURRENT USERS --</h2></center>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default View;
