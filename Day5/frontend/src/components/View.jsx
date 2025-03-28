import React, { useState, useEffect } from "react";
import axios from "axios";
import "./View.css";
import Register from "./Register";

const View = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    viewData();
  }, []);

  const viewData = async () => {
    const res = await axios.get("http://localhost:9000/users");
    console.log(res);
    setUsers(res.data);
  };
  return (
    <div>
        <Register onUserRegistered={viewData} />
      <table border={2}>
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
