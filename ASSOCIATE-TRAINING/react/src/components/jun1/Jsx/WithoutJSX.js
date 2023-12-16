import React from "react";

const WithoutJSX = () => {
  // With jsx
  //   return (
  //     <div>
  //         <h2>With JSX</h2>
  //     </div>
  //   )

  //without jsx
  return React.createElement("h2", null, "Without JSX - Complicated ");
  //(html tag,additional class id ,children for html tag)
};

export default WithoutJSX;
     