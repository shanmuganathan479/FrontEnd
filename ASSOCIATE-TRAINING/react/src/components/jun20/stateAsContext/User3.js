import React from "react";
import { useContext } from "react";
import UserContext from "./UserContext";

const User3 = () => {
  const { message, setmessage } = useContext(UserContext);

  const handleClick = () => {
    setmessage("Hii shan");
  };

  const handleClickHide = () => {
    setmessage("");
  };
  return (
    <div>
      <h2>User3</h2>
      <button onClick={handleClick}>Add message</button>
      <button onClick={handleClickHide}>Remove message</button>

      <h2 style={{ color: "red" }}>{message}</h2>
    </div>
  );
};

export default User3;
