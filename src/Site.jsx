import React, { useState } from 'react'
import './App.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Site = () =>{

    const [toggle, setToggle] = useState(true);
    const [toggle2, setToggle2] = useState(false);
    // const [toggle3, setToggle3] = useState(false);
    const [toggle4, setToggle4] = useState(true);

    const [value, setName] = useState({
        name:"Avanttec",
        numberSetINS:"A170423004 ",
        mob:"9600198611",
        mail:"avantmedical@gmail.com",
        creMail:"avantnetmedical@gmail.com",
        workerName:"Sanjana",
        workerDOB:"01/20/2002",
        PassWord:"sanjanaavanttec"

        

    });
     
    const getName =() =>{
      var ChangeName = document.getElementById("nameSet").value
      setName (previousState =>
        {
        return{...previousState,name: ChangeName}
      })
      
    }

      const getNumberINS =() =>{
      var ChangeNumINS = document.getElementById("SetINSNum").value
      setName (previousState =>{
        return{...previousState,numberSetINS: ChangeNumINS}
      })
    }

    const getNumberMob =() =>{
      var ChangeNumber = document.getElementById("SetMobNum").value
      setName (previousState =>{
        return{...previousState,mob: ChangeNumber}
      })
    }

    const getMail =() =>{
      var ChangeMail = document.getElementById("SetMail").value
      setName (previousState =>{
        return{...previousState,mail: ChangeMail}
      })
    }


    const setYes = () =>{
      confirm( "Do you Want to send the Mail")
    }

    const NewAlert = () =>{
      confirm( "Do you Want to Rest And Send  Credential Mail")
    }
 
    const getWorkName =() =>{
      var ChangeWorkName = document.getElementById("SetWorkerName").value
      setName (previousState =>{
        return{...previousState,workerName: ChangeWorkName}
      })
    }
    const getWorkDOB =() =>{
      var ChangeWorkDob = document.getElementById("SetWorkerDOB").value
      setName (previousState =>{
        return{...previousState,workerDOB: ChangeWorkDob}
      })
    }


    return(
             
        <div className='container-fluid mt-5'>
          < div className=' mt-5 setRes container'>
            <div className='setTRColor text-center container-fluid'>
              <b className='h3'>Institute Details</b>
              </div>
            <table className="table-responsive container">
                       <thead className='container'>
                     
                  <tr>
                  <th scope="col">
                        Institute Name
                        </th>
                        <th scope="col">
                            Institute Number
                        </th>
                        <th>
                          Mobile Number
                        </th>
                        
                        <th scope="col">
                            Institute Mail
                        </th>
                        <th scope="col">
                         <button className="btn container " 
                           onClick={setYes}
                           >
                            <h6 className='setColor setHov '>
                             Send Mail
                             </h6>
                          </button>
                        </th>
                      
                 </tr>
  </thead>

  {/* main table */}
  <tbody>
                          <tr>
                            <td><h6> {value.name} </h6>
                            {toggle && ( 
                                
                              
                                <Popup trigger={<button 
                                        onClick={() => setToggle(!toggle)} 
                                        className="btn container ">
                                        <h6 className='setColor setHov '>
                                        <i className='bi bi-pencil-square'></i>Edit Institite Name</h6>
                                        </button>} position="right center">
                                  
                                  {
                                    Cancel =>(
                                      <div>
                                  <label>Current Name:<input type='text' value={value.name}  disabled/></label>
                                    <label>Change Name:<input type='text'id='nameSet' /></label><br/> <br/>
                                    <button type='submit' onClick={getName}  >Save</button> &nbsp;
                                    <button className='ml-5' onClick={Cancel}>Cancel</button>
                                  </div>
                                    )
                                  }
                                 </Popup>
                              
                              )}
                            </td>

                          <td><h6> {value.numberSetINS} </h6>
                          {toggle && ( 
                              
                            
                              <Popup trigger={<button 
                                onClick={() => setToggle(!toggle)} 
                                className="btn container ">
                              <h6 className='setColor setHov '>
                                <i className='bi bi-pencil-square'></i>Edit Institite Number</h6>
                          </button>} position="right center">
                                
                          {
                                    Cancel =>(
                                <div>
                                <label>Current Institute Number:<input type='text' value={value.numberSetINS}  disabled/></label>

                                  <label>Change Institute Number:<input type='text'id='SetINSNum' /></label><br/><br/>
                                  <button type='button' onClick={getNumberINS}  >Save</button>
                                  <button className='ml-5' onClick={Cancel}>Cancel</button>

                                </div>
                                 )
                                }
                              </Popup>
                            
                            )}
                          </td>


                          <td><h6> {value.mob} </h6>
                          {toggle && 
                            ( 
                              
                            
                              <Popup trigger={<button 
                                onClick={() => setToggle(!toggle)} 
                                className="btn container ">
                              <h6 className='setColor setHov '>
                                <i className='bi bi-pencil-square'></i>Edit Institite Mobile Number</h6>
                          </button>} position="right center">
                                          
                                      {
                                      Cancel =>(
                                      <div>
                                        <label>Current Mobile Number:<input type='number' value={value.mob}  disabled/></label>
                                        <label>Change Mobile Number:<input type='number'id='SetMobNum' /></label><br/><br/>
                                        <button type='button' onClick={getNumberMob}  >Save</button>
                                        <button className='ml-5' onClick={Cancel}>Cancel</button>

                                      </div>
                                        )
                                      }
                                  
                              </Popup>
                            
                            )
                          }
                          </td>


              <td><h6> {value.mail} </h6>
              {toggle && ( 
                  
                
                  <Popup trigger={<button 
                    onClick={() => setToggle(!toggle)} 
                    className="btn container ">
                  <h6 className='setColor setHov '>
                    <i className='bi bi-pencil-square'></i>Edit Institite Mail</h6>
              </button>} position="right center">
                {
                  Cancel =>(
                    <div>
                    <label>Current Mail:<input type='mail' value={value.mail}  disabled/></label>
                      <label>Change Mail:<input type='mail'id='SetMail' /></label><br/><br/>
                      <button type='button' onClick={getMail}  >Save</button>
                      <button className='ml-5' onClick={Cancel}>Cancel</button>

                    </div>
                    )
                    }
                  </Popup>
                
                )}
              </td>      
      <td>

      <button className="btn container " 
                           onClick={NewAlert}
                           >
                            <h6 className='setColor setHov '>
                             Reset & send Credentail Mail
                             </h6>
                          </button>

      </td>
    </tr>
    {/* Main table end */}
  </tbody>
</table>

{/* Radiation Table */}
    </div><br/>
    
    <div className='container'>
    <button  className='setBtnColor btn SetHov' onClick={() => setToggle2(!toggle2)} >Radiation Worker</button> <br/>
    <br/> {toggle2 && (  <table>
      <thead>
        <tr>
          <th>Radiation Worker Name</th>
          <th> Radiation Worket DOB</th>
        </tr>
      </thead>
      <tbody>
          <tr>
              <td><h6> {value.workerName}  </h6>
                {toggle4 && (    
    <Popup trigger={ <button 
      onClick={() => setToggle4(!toggle4)} 
      className="btn container ">
    <h6 className='setColor setHov '>
       <i className='bi bi-pencil-square'></i>Edit</h6>
</button>} position="right center">
      <div>
      {/* /<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> */}
      <label>Current Worker Name:<input type='text' value={value.workerName}  disabled/></label>

        <label>Change Worker Name:<input type='text'id='SetWorkerName' /></label>
        <button type='button' onClick={getWorkName}  >Save</button>
      </div>
     </Popup>
  
  )}
</td>



<td><h6> {value.workerDOB} </h6>
{toggle4 && ( 
    
   
    <Popup trigger={ <button 
      onClick={() => setToggle4(!toggle4)} 
      className="btn container ">
    <h6 className='setColor setHov '>
       <i className='bi bi-pencil-square'></i>Edit</h6>
</button>} position="right center">
      <div>
      <label>Current Worker DOB:<input type='text' value={value.workerDOB}  disabled/></label>

        <label>Change Worker DOB:<input type='date'id='SetWorkerDOB' /></label>
        <button type='button' onClick={getWorkDOB}  >Save</button>
      </div>
     </Popup>
  
  )}
</td> 

    </tr>
      </tbody>
    </table> )}
     </div> <br/>
           

</div>

    )
}

export default Site;