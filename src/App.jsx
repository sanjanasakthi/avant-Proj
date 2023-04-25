import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Search from './Search';
import { Link } from 'react-router-dom';

import ForLogo from './images/AvanttecLogo.png'
function App() {  
     
  return (  
    <>
    <div className="">  
              <div className='container-fluid setBgHome2 p-3'>
              <Link to='/'> <img src={ForLogo} alt='Logo'  className='btn image' /></Link>  
              </div>
              <div className='mt-5'>
              <Search/>
              </div>
              
    </div> 

    
    </> 
    
  );  
}  
 
export default App;
