import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Site from './Site'
import Search from './Search';

const Home =()=> {

    return(
        <>
        <BrowserRouter>
        <App/>
        <Routes>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/App' element={<App/>}/>
          <Route path='/Search' element={<Search/>}/>
          <Route path='/Site' element={<Site/>}/>
          {/* <Route path='/Radiation' element={<Radiation/>} /> */}
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default Home;
