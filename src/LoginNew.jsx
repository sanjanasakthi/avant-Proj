import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const LoginNew = () => {
    

    return(
        <div className='container setBgLogin h-50 w-50 mt-5 '>
             <h1 className='text-center textcolorset'>Admin Login</h1>
             
             <h3 className=' text-center mt-5'>
                <div className='row'>
                    <div className='col-sm-1'>

                    </div>
                    <div className='col-sm-2'>
                    <i class="bi bi-person-circle h1 SetIcolor"/>
                    </div>

                    <div className='col-sm-6'>
                    <input type='text'className='form-control rounded-pill' placeholder='User Name'/>

                    </div>
                </div>
             </h3>

             <h3 className='text-center mt-5'>
                <div className='row'>
                    <div className='col-sm-1'>

                    </div>
                    <div className='col-sm-2'>
                    <i class="bi bi-lock-fill h1 SetIcolor"/>
                    </div>

                    <div className='col-sm-6'>
                    <input type='text'className='form-control rounded-pill' placeholder='Password'/>

                    </div>
                </div>
             </h3>
             <div className='row mt-5'>
                            <div className='col-sm-4'>

                            </div>

                            <div className='col-sm-5 mt-3 '>
                            <Link to='/App' className='btn setBTNbg' >
                                <h3>
                                <i class="bi bi-box-arrow-right  "></i> LOGIN
                                </h3>
                            </Link> 

                            </div>

                            <div className='col-sm-3'>
                                
                            </div><br/>

                            <div className='mt-5'>

                            </div>

                        </div>

        </div>
    )
}

export default LoginNew ;
