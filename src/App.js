import { useEffect, useState } from "react";
import "./App.css";
import { data } from "./data";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // for (let i = 0; i < data.length; i++) {
    fetch(`/armories/characters/서씨가문의수치/profiles`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        authorization:
          "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAwMDEwMzAifQ.kJZYMxhNjtRjpekZhaWw-2HbADtm6AUCSNBKBhehxAmn3dy2NP95o6YSvVw2pQSXrMYP3VSrVZUTWQkYvyBaIHEAqVN5W4qotY3S4Roe0DC8mAKLOa1JQNZEbShgYBAYT0Ehj66e7B1wTELoT6ZCYx-nZJhApdqTP0C_wpcvdNlOAxM1nueIlknj4irk_kszbErdhxZAJqBa2unXCDmOInQjxNng-trWXPBhTdCbGPW4hStAHfYQC-X-Ve9A5knSmUpLzITxeRB3gjVcg4lWZNwviyKNGXIF0Gvld9_JbdqTW8zLggdapNTlsKGTpwD5oGlsd3L7dCor5IT-FIiSRg",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  console.log(users);
  return (
    <div className="App1">
      <h1>필연 단체 군장검사x</h1>
      {/* {users.map((user) => { */}
      return (
      <div className="App2">
        <img className="App3" src={users?.CharacterImage} alt="" />
        <div>
          <p>{users?.GuildMemberGrade}</p>
          <p>{users?.CharacterClassName}</p>
          <p>{users?.Title}</p>
          <p>{users?.CharacterName}</p>
          <p>{users?.ItemMaxLevel}</p>
        </div>
      </div>
      );
      {/* })} */}
    </div>
  );
}

export default App;
