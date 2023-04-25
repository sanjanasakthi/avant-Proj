import { Link } from 'react-router-dom';
import ForLogo from './images/AvanttecLogo.png'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Login = () =>{
    return(
        <div className=''>
             <div className='container-fluid setBgHome2 p-3'>
              <Link to='/'> <img src={ForLogo} alt='Logo'  className='btn image ms-2' /></Link>  
                
              </div> 

              <div className='container setBgLogin w-50 mt-5 '>
                
             <div className='mt-5 m-5 p-2'>
             <h1 className='text-center text-white mt-5'>Admin Login</h1>
             </div>
             
             <h3 className='container text-center w-50 mt-3 seth3bg'>
                <div className='row'>
                   <div className='col-sm-2'>
                    <i class="bi bi-person-circle h1 SetIcolor"/>
                    </div>

                    <div className='col-sm-10 mt-1'>
                    <input type='text'className='form-control rounded-pill setInput' placeholder='User Name'/>

                    </div>
                </div>
             </h3>

             <h3 className='container text-center mt-5 w-50 seth3bg'>
                <div className='row'>
                    
                    <div className='col-sm-2'>
                    <i class="bi bi-lock-fill h1 SetIcolor "/>
                    </div>

                    <div className='col-sm-10 mt-1'>
                    <input type='password'className='form-control rounded-pill' placeholder='Password'/>

                    </div>
                </div>
             </h3>
             <div className='row mt-5'>
                            <div className='col-sm-4'>

                            </div>

                            <div className='col-sm-5 mt-3 '>
                            <Link to='/App' className='btn setBTNbg SetIHOVcolor' >
                                <h3 >
                                <i class="bi bi-box-arrow-right SetIcolor "></i> LOGIN
                                </h3>
                            </Link> 

                            </div>

                            <div className='col-sm-3'>
                                
                            </div><br/>

                            <div className='mt-5'>

                            </div>

                        </div>

        </div>
        </div>
    )
}

export default Login;