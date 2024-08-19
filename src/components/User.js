import { useEffect, useState } from "react";
import UserCard from "./Card";
import InsertUser from "./InsertUser";
import { useNavigate } from "react-router-dom";
import React,{lazy,Suspense} from 'react';
export default function UserPage(props) {
    const [users, setUsers] = useState([]);
    // const apiURL = "https://65ded7efff5e305f32a09deb.mockapi.io/api/users";
    const apiURL = props.apiURL;
    const navigate = useNavigate();
  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((res) => setUsers([...users, ...res]));
  }, []);
  const deleteUser = (id) =>
    fetch(`${apiURL}/${id}`, { method: "DELETE" }).then(() =>
      setUsers(users.filter((user) => user.id !== id))
    );
  // function insertUser(){

  // }
  const openInEdit = (id) => {
        return navigate(`/update/${id}`)
    };
  return (
    <>
      <div className="d-flex flex-wrap">
        <InsertUser
          // onClickFunction={insertUser}
          apiURL={apiURL}
          users={users}
          setUsers={setUsers}
          insertUser={true}
        />
        {users.map((user, index) => (
          <UserCard
            key={index}
            apiURL={apiURL}
            onclick={() => deleteUser(user.id)}
            open={() => openInEdit(user.id)}
            insertUser={false}
            user={user}
          />
        ))}
      </div>
    </>
  );
}
