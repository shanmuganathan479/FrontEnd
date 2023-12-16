import { render } from '@testing-library/react'
import React from 'react'
import { BrowserRouter,Route,Routes,Link,Switch  } from 'react-router-dom'
import HomeComp from './components/HomeComp'
import About from './components/About'
class App extends React.Component
{

constructor(props)
{
super(props)
}
render()
{
 console.log("render ")
  return(
    <>
     <BrowserRouter>
     
        <ul>
          <li>
            <Link to="/">HomeComp</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          
        </ul>

        <hr />
     <Routes>
     <Route path="/" element={<HomeComp/>}/>
     <Route path="/about" element={<About/>}/>

     
     </Routes>
     </BrowserRouter>

    </> 
  )
}
}
export default App