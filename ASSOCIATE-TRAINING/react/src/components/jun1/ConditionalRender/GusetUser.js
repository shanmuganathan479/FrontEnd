import React from "react";
import { useState } from "react";

export const TernaryOpertor = () => {
  const [logged, setLogged] = useState(false);

  const handleClick=()=>{
       setLogged(true)
  }
  return (
    <div>
      <h2>TernaryOpertor</h2>
      <button onClick={handleClick}>Login</button>
      {logged ? <h4>Hey User</h4> : <h4>Hey guest log in</h4>}

      {/* We can have multiple option */}
    </div>
  );
};
