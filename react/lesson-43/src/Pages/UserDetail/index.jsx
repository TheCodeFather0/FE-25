import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import User from "../../Components/User";
import UserNotFound from "../../Components/UserNotFound";

const url = "https://jsonplaceholder.typicode.com/users/";
const UserDetail = () => {
  const [user, setUser] = useState({});
  const [loader, setLoader] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios(url + id)
      .then((res) => {
        if (res.status === 200) {
          setUser(res.data);
          setLoader(false);
        }
      })
      .catch((err) => {
        console.log(err.message);
        setLoader(false);
      });
  }, []);
  return (
    <div>
      {loader ? (
        <p>loading...</p>
      ) : user.name ? (
        <User {...user} />
      ) : (
        <UserNotFound />
      )}
    </div>
  );
};

export default UserDetail;
