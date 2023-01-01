import React, { useEffect, useState } from "react";
import Data from "./Data";
import Social from "./Social";
import "./home.css";
import ScrollDown from "./ScrollDown";
import axios from "axios";
import About from "../about/About";

const Home = () => {
  const [info, setInfo] = useState(false);
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);
  const [collection, setCollection] = useState([]);

  // 원정대
  useEffect(() => {
    axios({
      method: "get",
      url: `https://developer-lostark.game.onstove.com/characters/${userName}/siblings`,
      headers: {
        Accept: "application/json",
        authorization: `bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAwMDEwMzAifQ.kJZYMxhNjtRjpekZhaWw-2HbADtm6AUCSNBKBhehxAmn3dy2NP95o6YSvVw2pQSXrMYP3VSrVZUTWQkYvyBaIHEAqVN5W4qotY3S4Roe0DC8mAKLOa1JQNZEbShgYBAYT0Ehj66e7B1wTELoT6ZCYx-nZJhApdqTP0C_wpcvdNlOAxM1nueIlknj4irk_kszbErdhxZAJqBa2unXCDmOInQjxNng-trWXPBhTdCbGPW4hStAHfYQC-X-Ve9A5knSmUpLzITxeRB3gjVcg4lWZNwviyKNGXIF0Gvld9_JbdqTW8zLggdapNTlsKGTpwD5oGlsd3L7dCor5IT-FIiSRg`,
      },
    }).then(function (response) {
      setUser((user) => [...user, response.data]);
    });
  }, [info]);

  // user-profile
  useEffect(() => {
    axios({
      method: "get",
      url: `https://developer-lostark.game.onstove.com/armories/characters/${userName}/profiles`,
      headers: {
        Accept: "application/json",
        authorization: `bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAwMDEwMzAifQ.kJZYMxhNjtRjpekZhaWw-2HbADtm6AUCSNBKBhehxAmn3dy2NP95o6YSvVw2pQSXrMYP3VSrVZUTWQkYvyBaIHEAqVN5W4qotY3S4Roe0DC8mAKLOa1JQNZEbShgYBAYT0Ehj66e7B1wTELoT6ZCYx-nZJhApdqTP0C_wpcvdNlOAxM1nueIlknj4irk_kszbErdhxZAJqBa2unXCDmOInQjxNng-trWXPBhTdCbGPW4hStAHfYQC-X-Ve9A5knSmUpLzITxeRB3gjVcg4lWZNwviyKNGXIF0Gvld9_JbdqTW8zLggdapNTlsKGTpwD5oGlsd3L7dCor5IT-FIiSRg`,
      },
    }).then(function (response) {
      setProfile((profile) => [...profile, response.data]);
    });
  }, [info]);

  // collection
  useEffect(() => {
    axios({
      method: "get",
      url: `https://developer-lostark.game.onstove.com/armories/characters/${userName}/collectibles`,
      headers: {
        Accept: "application/json",
        authorization: `bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAwMDEwMzAifQ.kJZYMxhNjtRjpekZhaWw-2HbADtm6AUCSNBKBhehxAmn3dy2NP95o6YSvVw2pQSXrMYP3VSrVZUTWQkYvyBaIHEAqVN5W4qotY3S4Roe0DC8mAKLOa1JQNZEbShgYBAYT0Ehj66e7B1wTELoT6ZCYx-nZJhApdqTP0C_wpcvdNlOAxM1nueIlknj4irk_kszbErdhxZAJqBa2unXCDmOInQjxNng-trWXPBhTdCbGPW4hStAHfYQC-X-Ve9A5knSmUpLzITxeRB3gjVcg4lWZNwviyKNGXIF0Gvld9_JbdqTW8zLggdapNTlsKGTpwD5oGlsd3L7dCor5IT-FIiSRg`,
      },
    }).then(function (response) {
      setCollection((collection) => [...collection, response.data]);
    });
  }, [info]);

  function getUserName(e) {
    setUserName(e.target.value);
  }

  function handleUserInfo() {
    setProfile([]);
    setCollection([]);
    setInfo(!info);
  }

  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />

          <div className="home__img"></div>

          <Data getUserName={getUserName} userName={userName} handleUserInfo={handleUserInfo} />
        </div>

        <ScrollDown />
      </div>
      {info && <About user={user} profile={profile} collection={collection} />}
    </section>
  );
};

export default Home;
