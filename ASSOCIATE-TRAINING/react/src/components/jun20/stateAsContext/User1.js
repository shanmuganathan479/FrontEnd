import React,{useState} from "react";
import User2 from "./User2";
import { UserProvider } from "./UserContext";

const User1 = () => {
  const [message, setmessage] = useState("");

  return (
    <div>
      <h2>User1</h2>
      <UserProvider value={{ message, setmessage }}>
        <User2 />
      </UserProvider>
    </div>
  );
};

export default User1;
