import React from "react";

const About = ({ user, profile, collection }) => {
  console.log(profile[0]);
  console.log(collection[0]);
  return (
    <div className="App2">
      <div className="App3">
        <img className="Img1" src={profile[0]?.CharacterImage} alt="" />
        <div>
          <p>{profile[0]?.CharacterClassName}</p>
          <p>{profile[0]?.CharacterLevel}</p>
          <p>{profile[0]?.CharacterName}</p>
          <p>{profile[0]?.ExpeditionLevel}</p>
          <p>{profile[0]?.GuildName}</p>
          <p>{profile[0]?.ItemMaxLevel}</p>
          <p>{profile[0]?.PvpGradeName}</p>
          <p>{profile[0]?.ServerName}</p>
          <p>{profile[0]?.Title}</p>
          <p>{profile[0]?.TownLevel}</p>
          <p>{profile[0]?.TownName}</p>
        </div>
      </div>
      <div className="App4">
        {collection[0]?.map((col) => {
          return (
            <div className="App4">
              <img className="Img2" src={col.Icon} alt="" />
              <div>{col.Type}</div>
              <div>
                {col.Point} / {col.MaxPoint}
              </div>
            </div>
          );
        })}
      </div>
      <div className="App5">
        {user[0]?.map((u) => {
          let a = 0;
          return (
            <div className="App5">
              <div>{u.CharacterName}</div>
              <div>
                {Number(u.ItemMaxLevel.replace(",", "")) < 1325
                  ? "0골드"
                  : Number(u.ItemMaxLevel.replace(",", "")) > 1455
                  ? a + 1300
                  : Number(u.ItemMaxLevel.replace(",", "")) > 1455
                  ? a + 2000
                  : ""}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
