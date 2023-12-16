import{useEffect,useState} from "react"

function App() 
{
  const [data,setData] =useState("infosys")
  console.log("data",data)
  const handleChange=()=>
  {
   setData("Indium")
  }
  return (
    <div className="App">
      <h2 onClick={handleChange}>i work for {data}</h2>
     
      
    </div>
  );
}


export default App;
