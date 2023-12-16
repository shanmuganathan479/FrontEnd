import React, { useEffect } from "react";
import PostData from "./PostData";
const Post = () => {
  console.log(PostData);
  const ConvertedData = Object.entries(PostData);
  console.log(ConvertedData);

  return (
    <div>
      <h1>Post</h1>
      {ConvertedData.map((obj, index) => {
        const entries = Object.entries(obj[1]);
        return (
          <div>
            <h3>{obj[0]}</h3>
            {entries.map(([key, value]) => {
              return (
                <div style={{border: "2px solid purple"}}>
                  <li key={key}>{value._id}</li>
                  <li >{value._t}</li>
                  <li >{value.acl._t}</li>
                  <li >{value.acl.pub}</li>

                  <li >{value.cdate}</li>
                  <li >{value.cm}</li>
                  <img  src={value.imgs} alt="NO image"/>
                  
                  {/* <li >{value.lkbpst.}</li> */}
                  {/* <li >{value.meta.wid}</li> */}
                  {/* <li >{value.rpstIds}</li> */}
                  {/* <li >{value.rusrIds}</li> */}
                  {/* <img src={value.stickers} alt="No stickers"/> */}

                  {/* <img > src={value.stickers}/> */}
                 
                 {/* {
                  value.stickers.map((obj)=>{
                    return <div>
                        <hr/>
                           <li>{obj.pid}</li>
                        <hr/>
                    </div>
                  })
                 } */}


                  {/* <li >{value.main}</li> */}


                  <img src={value.main} alt="No main image"/>

                  
                  <li >{value.nmvid}</li>
                  <li >{value.ovid}</li>
                  <li > {value.p_type}</li>
                  <li >{value.pid}</li>

                  <li >{value.puid}</li>
                  <li >{value.pvid}</li>



                  <li >{value.txt}</li>

                  <li >{value.txt_lang}</li>

                  <li >{value.udate}</li>

                  <li >{value.uid}</li>
                  <li >{value.utgs}</li>
                  <li >{value.vfpst}</li>
                  <li >{value.vid}</li>
                  <li >{value.vid_dur}</li>
                  <li >{value.vid_hgt}</li>
                  <li >{value.vid_wid}</li>
                  <li >{value.vis}</li>
                  <li>{value.vtgs}</li>
                  <li >{value.vttl}</li>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Post;
