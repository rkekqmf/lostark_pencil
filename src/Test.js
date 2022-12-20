const Test = ({ profile, collection }) => {
  console.log(profile[0]);
  console.log(collection[0]);
  return (
    <div className="App2">
      <img className="App3" src={profile[0]?.CharacterImage} alt="" />
      <div>{profile[0]?.CharacterClassName}</div>
      <div>{profile[0]?.CharacterLevel}</div>
      <div>{profile[0]?.CharacterName}</div>
      <div>{profile[0]?.ExpeditionLevel}</div>
      <div>{profile[0]?.GuildName}</div>
      <div>{profile[0]?.ItemAvgLevel}</div>
      <div>{profile[0]?.PvpGradeName}</div>
      <div>{profile[0]?.ServerName}</div>
      <div>{profile[0]?.Title}</div>
      <div>{profile[0]?.TownLevel}</div>
      <div>{profile[0]?.TownName}</div>
      {collection[0]?.map((col) => {
        return (
          <>
            <img src={col.Icon} alt="" />
            <div>{col.Type}</div>
            <div>
              {col.Point} / {col.MaxPoint}
            </div>
          </>
        );
      })}
    </div>
  );
};

// Stats
// :
// (8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// Tendencies
// :
// (4) [{…}, {…}, {…}, {…}]

export default Test;
