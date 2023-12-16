import React from "react";

const Child3 = ({ children, name }) => {
  console.log("Child -3");
  return (
    <div>
      <h2>Child3</h2>
      <div>
        {children} {name}
      </div>
      <h3 className="note">
        Note:- In parent we are passing children element prop with strong html tag. So
        it always render parent also
      </h3>
      <h3 className="note">Conclusion:- We dont need to use the memo here</h3>
     
    </div>
  );
};

export default React.memo(Child3);
