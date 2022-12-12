import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { data } from "./data";

function App() {
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   for (let i = 0; i < data.length; i++) {
  //     fetch(`https://developer-lostark.game.onstove.com/armories/characters/${data[i]}/profiles`, {
  //       method: "get",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //         authorization:
  //           "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAwMDEwMzAifQ.kJZYMxhNjtRjpekZhaWw-2HbADtm6AUCSNBKBhehxAmn3dy2NP95o6YSvVw2pQSXrMYP3VSrVZUTWQkYvyBaIHEAqVN5W4qotY3S4Roe0DC8mAKLOa1JQNZEbShgYBAYT0Ehj66e7B1wTELoT6ZCYx-nZJhApdqTP0C_wpcvdNlOAxM1nueIlknj4irk_kszbErdhxZAJqBa2unXCDmOInQjxNng-trWXPBhTdCbGPW4hStAHfYQC-X-Ve9A5knSmUpLzITxeRB3gjVcg4lWZNwviyKNGXIF0Gvld9_JbdqTW8zLggdapNTlsKGTpwD5oGlsd3L7dCor5IT-FIiSRg",
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((data) => setUsers((users) => [...users, data]));
  //   }
  // }, []);

  useEffect(() => {
    for (let i = 0; i < data.length; i++) {
      axios({
        method: "get", // 통신 방식
        url: `/armories/characters/${data[i]}/profiles`,
        proxy: "https://developer-lostark.game.onstove.com",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          authorization:
            "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAwMDEwMzAifQ.kJZYMxhNjtRjpekZhaWw-2HbADtm6AUCSNBKBhehxAmn3dy2NP95o6YSvVw2pQSXrMYP3VSrVZUTWQkYvyBaIHEAqVN5W4qotY3S4Roe0DC8mAKLOa1JQNZEbShgYBAYT0Ehj66e7B1wTELoT6ZCYx-nZJhApdqTP0C_wpcvdNlOAxM1nueIlknj4irk_kszbErdhxZAJqBa2unXCDmOInQjxNng-trWXPBhTdCbGPW4hStAHfYQC-X-Ve9A5knSmUpLzITxeRB3gjVcg4lWZNwviyKNGXIF0Gvld9_JbdqTW8zLggdapNTlsKGTpwD5oGlsd3L7dCor5IT-FIiSRg",
        }, // 요청 헤더 설정
        responseType: "json", // default
      }).then(function (response) {
        setUsers((users) => [...users, response.data]);
        console.log(response.data);
      });
    }
  }, []);

  // var xmlHttpRequest = new XMLHttpRequest();
  // xmlHttpRequest.open(
  //   "GET",
  //   "/armories/characters/서씨가문의수치/profiles",
  //   true
  // );
  // xmlHttpRequest.setRequestHeader("accept", "application/json");
  // xmlHttpRequest.setRequestHeader(
  //   "authorization",
  //   "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAwMDEwMzAifQ.kJZYMxhNjtRjpekZhaWw-2HbADtm6AUCSNBKBhehxAmn3dy2NP95o6YSvVw2pQSXrMYP3VSrVZUTWQkYvyBaIHEAqVN5W4qotY3S4Roe0DC8mAKLOa1JQNZEbShgYBAYT0Ehj66e7B1wTELoT6ZCYx-nZJhApdqTP0C_wpcvdNlOAxM1nueIlknj4irk_kszbErdhxZAJqBa2unXCDmOInQjxNng-trWXPBhTdCbGPW4hStAHfYQC-X-Ve9A5knSmUpLzITxeRB3gjVcg4lWZNwviyKNGXIF0Gvld9_JbdqTW8zLggdapNTlsKGTpwD5oGlsd3L7dCor5IT-FIiSRg"
  // );
  // xmlHttpRequest.onreadystatechange = () => {};
  // xmlHttpRequest.send();
  // console.log(xmlHttpRequest);
  return (
    <div className="App1">
      <h1>필연 단체 군장검사x</h1>

      {users?.map((user) => {
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
