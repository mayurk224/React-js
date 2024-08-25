import React, { useEffect, useState } from "react";

function Users() {
  const [usersList, setUsersList] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchAllUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const result = await response.json();
      if (result?.users) {
        setUsersList(result?.users);
        setLoading(false);
      } else {
        setUsersList([]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  // useEffect(() => {
  //   fetchAllUsers();
  // }, []);

  if (loading) return <h3>Fetching users please wait</h3>;

  // function buttonClick(){
  //   fetchAllUsers()
  // }
  return (
    <div>
      <h1>All users lists</h1>
      <ul>
        {usersList && usersList.length > 0 ? (
          usersList.map((item) => (
            <li key={item?.id}>
              <p>
                {item?.firstName} {item?.maidenName} {item?.lastName}
              </p>
            </li>
          ))
        ) : (
          <h2>no result found</h2>
        )}
      </ul>
      <button onClick={fetchAllUsers}>Show users</button>
    </div>
  );
}

export default Users;
