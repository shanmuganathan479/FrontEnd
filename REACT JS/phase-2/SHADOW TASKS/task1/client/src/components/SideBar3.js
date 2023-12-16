import React from 'react'
 import  'boxicons';
import SearchSection from'./SearchSection'
import { Route,Routes,Link } from 'react-router-dom';
import Contact from './Pages/Contact'
import Form from './Pages/Form';
import Aboutus from './Pages/Aboutus';


 function SideBar3() 
{
  

  
   
   const btnClick=(e)=>
   { 
     e.preventDefault();
   //alert("working");
   let sideBar=document.querySelector(".sidebar")
   console.log(e)

     sideBar.classList.toggle("active"); 
  
   }





  // let btn=document.querySelector("#btnclick");
  // let sideBa=document.querySelector(".sidebar")

  // btn.onclick=function(e)
  // {
  //   console.log(e)
  //   sideBa.classList.toggle("active");
  // }
 


  return (
      
    <div className='sidebar'>
        
        <div className='sidebarContent'>
            <div className='sidebarName'>
             PHONE ARENA
            </div>

          <div> <box-icon onClick={btnClick} name='menu' id='btnclick' ></box-icon> </div> 
          {/* <div> <box-icon  name='menu' id='btnclick' ></box-icon> </div>  */}


          
        </div>
        <ul className='sidebarList'>
            <li className='box-icon'>
               <Link  to="/" >
                <box-icon name='home'></box-icon>
                &nbsp;
                &nbsp;
                &nbsp;
                 <span to="/" className='items'>HOME</span> </Link>
                 
            </li>
            <li>
                
              <Link to="/contact">
              <box-icon name='phone'></box-icon> 
                &nbsp;
                &nbsp;
                &nbsp; 
              <span className='items'>CONTACT</span></Link>
            </li>
            <li>
                <Link  to="/aboutus" >
                <box-icon name='user-circle'></box-icon>
                &nbsp;
                &nbsp;
                &nbsp;
                 <span className='items'>USER LIST</span> </Link>
            </li>
            
            <li>
                <Link to="/chat">
                <box-icon type='solid' name='user-detail'></box-icon>
                &nbsp;
                &nbsp;
                &nbsp;
                 <span className='items'>FORM</span>  </Link>
            </li>

        </ul>
        <div className='homeContent'>

             <Routes>
               <Route path='/contact' element={<Contact/>} exact/>
               <Route path='/aboutus' element={<Aboutus/>} exact/>
               <Route path='/chat' element={<Form/>} exact/>
             </Routes>
              <SearchSection/>
        </div>
    </div>
  )
}
export default SideBar3;
