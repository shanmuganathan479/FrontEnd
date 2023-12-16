import React from 'react'
import about from './about.webp'
import  { useState, useEffect } from "react";
import Axios from 'axios'

export default function Aboutus() {

  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => 
  {
    
  fetch('http://localhost:5000/customers')
  .then(response => response.json())
  .then((data) =>{ console.log(data)
  setData(data)  ;
  }

  );

  };

  return (
    <div>
      <h1>USER DATAS</h1>
      <br/>
      <br/>
      <br/>
       <table width="100%">
        <thead>
        <tr>
          <th>Id</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Email</th>
          <th>PhoneNumber</th>
          <th>Password</th>
          <th>Status</th>
        </tr>
        </thead>

        <tbody>
            {data && 
              data.map((item) => {
                console.log(item)
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.firstname}</td>
                    <td>{item.lastname}</td>
                    <td>{item.email}</td>
                    <td>{item.phonenumbeer}</td>
                    <td>{item.password}</td>
                    <td>{item.status}</td>
                  </tr>
                );
              })} </tbody>

       </table>
      
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
      


       
    </div>
  )
}
