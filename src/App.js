import { useEffect, useState } from "react";
import "./App.css";
import { data } from "./data";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    for (let i = 0; i < data.length; i++) {
      fetch(`/armories/characters/${data[i]}/profiles`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${process.env.REACT_APP_API_KEY}`,
        },
      })
        .then((response) => response.json())
        .then((data) => setUsers((users) => [...users, data]));
    }
  }, []);
  console.log(users);
  return (
    <div className="App1">
      <h1>필연 단체 군장검사</h1>

      {users.map((user) => {
        return (
          <div className="App2">
            <img className="App3" src={user?.CharacterImage} alt="" />
            <div>
              <p>{user?.GuildMemberGrade}</p>
              <p>{user?.CharacterClassName}</p>
              <p>{user?.Title}</p>
              <p>{user?.CharacterName}</p>
              <p>{user?.ItemMaxLevel}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
