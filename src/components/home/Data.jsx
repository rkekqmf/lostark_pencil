import React from "react";

const Data = ({ getUserName, userName, handleUserInfo }) => {
  return (
    <div className="home__data">
      <h1 className="home__title">...</h1>
      <h3 className="home__subtitle">닉네임 입력</h3>
      <p className="home__description">...</p>
      <input className="home__id-input" onChange={getUserName} type="text" value={userName} />

      <button onClick={handleUserInfo} className="button button--flex">
        아이디 검색
      </button>
    </div>
  );
};

export default Data;
