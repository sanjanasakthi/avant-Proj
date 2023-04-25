
import './App.css'

const Radiation = () =>{

    return(
        <div>

{toggle2 && (  
     <div>
        <div className='setTRColor text-center container-fluid'>
              <b className='h3'>Institute Details</b>
              </div>
     <table className='table-responsive container'>
      <thead>
        <tr>
          <th>First Name</th>
          <th> Last Name</th>
          <th>Name With Intials</th>
          <th>Mobile Number</th>
          <th>E-Mail ID</th>
          <th>Date of Birth</th>
        </tr>
      </thead>
      <tbody>
          <tr>

            {/* ----First Name */}
              <td><h6> {value.firstName}  </h6>
                {toggle4 && (    
    <Popup trigger={ <button 
      onClick={() => setToggle4(!toggle4)} 
      className="btn container ">
    <h6 className='setColor setHov '>
       <i className='bi bi-pencil-square'></i>Edit First Name</h6>
</button>} position="right center">
      <div>
      <label>Current First Name:<input type='text' value={value.firstName}  disabled/></label>

        <label>Change First  Name:<input type='text'id='SetWorkerName' /></label>
        <button type='button' onClick={getWorkName}  >Save</button>
      </div>
     </Popup>
  
  )}
</td>

{/* -------------Second Name-------------------- */}

<td><h6> {value.lastName}  </h6>
                {toggle4 && (    
    <Popup trigger={ <button 
      onClick={() => setToggle4(!toggle4)} 
      className="btn container ">
    <h6 className='setColor setHov '>
       <i className='bi bi-pencil-square'></i>Edit Last Name</h6>
</button>} position="right center">
      <div>
      <label>Current Last Name:<input type='text' value={value.lastName}  disabled/></label>

        <label>Change Last  Name:<input type='text'id='SetWorkerName' /></label>
        <button type='button' onClick={getWorkName}  >Save</button>
      </div>
     </Popup>
  
  )}
</td>

{/* ----------intial----------- */}

<td><h6> {value.intail}  </h6>
                {toggle4 && (    
    <Popup trigger={ <button 
      onClick={() => setToggle4(!toggle4)} 
      className="btn container ">
    <h6 className='setColor setHov '>
       <i className='bi bi-pencil-square'></i>Edit Name With Intial</h6>
</button>} position="right center">
      <div>
      <label>Current Name With Intials:<input type='text' value={value.intail}  disabled/></label>

        <label>Change Name With Intials:<input type='text'id='SetWorkerName' /></label>
        <button type='button' onClick={getWorkName}  >Save</button>
      </div>
     </Popup>
  
  )}
</td>

{/* --------Mobile number-worker--------- */}

<td><h6> {value.mobileNum}  </h6>
                {toggle4 && (    
    <Popup trigger={ <button 
      onClick={() => setToggle4(!toggle4)} 
      className="btn container ">
    <h6 className='setColor setHov '>
       <i className='bi bi-pencil-square'></i>Edit Mobile Number</h6>
</button>} position="right center">
      <div>
      <label>Current Mobile Numebr :<input type='text' value={value.mobileNum}  disabled/></label>

        <label>Change Mobile Number:<input type='text'id='SetWorkerName' /></label>
        <button type='button' onClick={getWorkName}  >Save</button>
      </div>
     </Popup>
  
  )}
</td>

{/* --------Email ID---------- */}

<td><h6> {value.workerEmail}  </h6>
                {toggle4 && (    
    <Popup trigger={ <button 
      onClick={() => setToggle4(!toggle4)} 
      className="btn container ">
    <h6 className='setColor setHov '>
       <i className='bi bi-pencil-square'></i>Edit E-Mail Id</h6>
</button>} position="right center">
      <div>
      <label>Current E-Mail Id:<input type='text' value={value.workerEmail}  disabled/></label>

        <label>Change E-Mail Id:<input type='text'id='SetWorkerName' /></label>
        <button type='button' onClick={getWorkName}  >Save</button>
      </div>
     </Popup>
  
  )}
</td>


{/*  */}



{/*  */}

<td><h6> {value.workerDOB} </h6>
{toggle4 && ( 
    
   
    <Popup trigger={ <button 
      onClick={() => setToggle4(!toggle4)} 
      className="btn container ">
    <h6 className='setColor setHov '>
       <i className='bi bi-pencil-square'></i>Edit Date Of Birth </h6>
</button>} position="right center">
      <div>
      <label>Current Date Of Birth :<input type='text' value={value.workerDOB}  disabled/></label>

        <label>Change Date Of Birth:<input type='date'id='SetWorkerDOB' /></label>
        <button type='button' onClick={getWorkDOB}  >Save</button>
      </div>
     </Popup>
  
  )}
</td> 

    </tr>
      </tbody>
    </table> 

            </div>)}

</div>            
    )
}
export default Radiation;