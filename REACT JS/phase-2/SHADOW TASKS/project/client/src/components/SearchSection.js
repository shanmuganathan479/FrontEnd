import React,{useState} from 'react'
import TextField from "@mui/material/TextField";
import {ImageSource} from'./ImageSource3'


const SearchSection=()=>
{
  const [identify,setIdentify]=useState("");
 
  const searchBox=(e)=>
  {
    setIdentify(e.target.value);  
  }   
    let searchPhone=ImageSource.filter(imgee =>
      {
        
      if(imgee.header.toLowerCase().includes(identify.toLowerCase()))
      {
        return imgee
      }  
      else if(imgee.caption.includes(identify))
      {
        return imgee
      }   
    })   
    
return(
          <div id='search'>
         <div id='searchBar'>
          <TextField
          className='sr'
          label="Search Mobile"
          sx={{ width: 300 }}
          onChange={searchBox}
          value={identify}
          type="search"
          /> </div>
     <div className="content"> 
     {
     searchPhone && searchPhone.length > 0 ? (     
     searchPhone.map(imgee => 
     {  
     return(       
     <div className='subContent'> 
     <br/>   
     <div className='phoneHead'> <b>{imgee.header}</b> </div>  
     <br/>                     
     <div className='phoneImage' ><img  src={imgee.icon}
     alt="not loaded" width="220px" height="300px"
    /></div>                
     <br/>
     <div className='phoneCaption'>{imgee.caption}</div> 
     <br/>    
    </div>
    )
     }
     )
     ) : (
      <div><h4 id='noMobileFound'>NO MOBILES FOUND</h4></div>
     )
     }
     </div>   
        </div>
      )
}
export default SearchSection;