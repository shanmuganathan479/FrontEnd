import './App.css';
import './MediaQuery.css'
import Header from'./components/Header'


 import { BrowserRouter as Router } from "react-router-dom";

import SideBar3 from './components/SideBar3';

function App() 
{
  return (
      <div >
      <Header/>
       <Router>
       <SideBar3/>
       </Router>
    </div>
  );
}

export default App;
