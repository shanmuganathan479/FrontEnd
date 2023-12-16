import React from "react";

 const WithoutJSX =()=>{
 
    // return(
    //     <div>
    //         <h1>With JSX</h1>
    //     </div>
    // )

    return React.createElement("h1",null,"Without JSX please look at the file")

    // it takes 3 arguments
    //("string html tag","additional properties{object} like id,className",children of html (Msg for html tag))
}

export default WithoutJSX;