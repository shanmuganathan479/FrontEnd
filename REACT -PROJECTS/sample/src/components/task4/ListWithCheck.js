import React, { useEffect, useState } from "react";

const ListWithCheck = () => {
  const mobile = ["iphone", "sony", "nokia", "samsung", "blackberry"];
  const [mobiles, setmobiles] = useState(mobile);
  const [show, setshow] = useState(false);
  const [element, setElement] = useState(0);
  // const [checked, setchecked] = useState(false);

  const handleDelete = (e) => {
    // console.log(e.target.id);
    const findElement = mobiles.filter((item, index) => {
      return Number(e.target.id) !== index;
    });
    setmobiles(findElement);
  };

  const handleButton = (e) => {
    // setchecked((prev) => !prev);

    setElement(e.target.id);
    setshow(prev=>!prev)
    
    // if(!show == true){
    //   console.log("true")
    // //   setElement(e.target.id);
    // //   setshow(prev=>!prev)
    // }else{
    //     console.log("false")
    // }


    // const findButton = mobiles.find((item, index) => {
    //   return e.target.id == index;
    // });

    // const findIndex = mobiles.indexOf(findButton);

    // if (parseInt(e.target.id) === findIndex) {
    //   setshow(prev =>!prev);
    //   setElement(e?.target.id);
    // } else{
    //   setshow(false);
    // }
    // console.log(findIndex)
  };

  // useEffect(() => {
  //   if (checked) {
  //     setshow(true);
  //   } else {
  //     setshow(false);
  //   //   setchecked(false)
  //   }
  // }, [checked]);

  //   console.log(mobiles)
  return (
    <div>
      <h1>ListWithCheck</h1>
      {mobiles.map((item, index) => {
        return (
          <div key={index}>
            <p>
              <input type="checkbox" onClick={handleButton} id={index} />
              {item}

              {show && 
              index == element && 
              (
                <button id={index} onClick={handleDelete}>
                  Delete
                </button>
              )}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ListWithCheck;
