import React from 'react'
import ReactDOM from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Site from './Site'
import Search from './Search';
import './App.css'
import Login from './Login'
// import LoginNew from './LoginNew';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
<>
<BrowserRouter>
       
        <Routes>
          <Route path='/' element={<Login/>}/>
          {/* <Route path='/' element={<LoginNew/>}/> */}

          <Route path='/App' element={<App/>}/>
          <Route path='/Search' element={<Search/>}/>
          <Route path='/Site' element={<Site/>}/>
          </Routes>
        </BrowserRouter>
        {/* <LoginNew/> */}
</>
    

  </React.StrictMode>,
)
