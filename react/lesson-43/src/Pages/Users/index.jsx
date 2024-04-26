import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const url = "https://jsonplaceholder.typicode.com/users";
const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios(url).then(({ data }) => {
      setUsers(data);
    });
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row">
          {users.map(({ id, username }) => {
            return (
              <div key={id} className="col-4 p-2">
                <Link to={`/users/${id}`}>
                  <div className=" border border-dark p-2">{username}</div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Users;
