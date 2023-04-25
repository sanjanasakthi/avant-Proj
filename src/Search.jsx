import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'
import './App.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
const Search = () =>{


    const [toggle, setToggle] = useState(true);
    const [toggle2, setToggle2] = useState(false);
    const [toggle3, setToggle3] = useState(false);
    const [toggle4, setToggle4] = useState(true);

    const [value, setName] = useState({
        name:"Avanttec",
        numberSetINS:"A170423004 ",
        mob:"9600198611",
        mail:"avantmedical@gmail.com",
        creMail:"avantnetmedical@gmail.com",
        firstName:"Sanjana",
        lastName:"Shakthi",
        intail:"Sanjana Shakthi .S",
        mobileNum:"9600198622",
        workerEmail:"avantradiation@gmail.com",
        workerDOB:"01/20/2002",
        

        

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
 
    const getFName =() =>{
      var ChangeWorkName = document.getElementById("SetFName").value
      setName (previousState =>{
        return{...previousState,firstName: ChangeWorkName}
      })
    }

    const getLName =() =>{
        var ChangeWorkName = document.getElementById("SetLName").value
        setName (previousState =>{
          return{...previousState,lastName: ChangeWorkName}
        })
      }

      const getIName =() =>{
        var ChangeWorkName = document.getElementById("SetIName").value
        setName (previousState =>{
          return{...previousState,workerName: ChangeWorkName}
        })
      }

      const getWorkNum =() =>{
        var ChangeWorkName = document.getElementById("SetWorkerNum").value
        setName (previousState =>{
          return{...previousState,mobileNum: ChangeWorkName}
        })
      }

      const getWorkMail =() =>{
        var ChangeWorkName = document.getElementById("SetWorkerMail").value
        setName (previousState =>{
          return{...previousState,workerEmail: ChangeWorkName}
        })
      }

    const getWorkDOB =() =>{
      var ChangeWorkDob = document.getElementById("SetWorkerDOB").value
      setName (previousState =>{
        return{...previousState,workerDOB: ChangeWorkDob}
      })
    }


    return(
        <div>
            <div className='container'>
                <label htmlFor="search" className='container-fluid  p-3'> 
                    <select className='p-1'>
                        <option>Filter By</option>
                        <option>Institute Number</option>
                        <option>Name</option>
                        <option>E-Mail</option>
                        <option>Mobile Number</option>
                    </select> 
                    <input type="search" id="form1" class="container-fluid w-75 ms-4" />
                    <button onClick={() => setToggle3(!toggle3)} type="button" class="btn sethov ">
                      <i class="bi bi-search h1"></i></button>           
                      </label>
            </div>


            {/* ----------------------Search------------------------------ */}
            {toggle3 && (    
            
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
                            <td>
                              
                              <div className='row'>
                                <div className='col-sm-6'>
                                <b className='h6'> {value.name} </b>
                                </div>

                                <div className='col-sm-6'>
                                {toggle && ( 
                                
                              
                                <Popup trigger={<button 
                                        onClick={() => setToggle(!toggle)} 
                                        className="btn container ">
                                        <h6 className='setColor setHov '>
                                        <i className='bi bi-pencil-square'></i></h6>
                                        </button>} position="bottom center">
                                  
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
                                </div>
                              </div>
                              
                              {/* <b className='h6'> {value.name} </b> */}
                            {/* {toggle && ( 
                                
                              
                                <Popup trigger={<button 
                                        onClick={() => setToggle(!toggle)} 
                                        className="btn container ">
                                        <h6 className='setColor setHov '>
                                        <i className='bi bi-pencil-square'></i></h6>
                                        </button>} position="bottom center">
                                  
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
                              
                              )} */}
                            </td>

                          <td>
                            <div className='row'>
                              <div className='col-sm-6'>
                              <h6> {value.numberSetINS} </h6>
                              </div>

                              <div className='col-sm-6'>
                              {toggle && ( 
                              
                            
                              <Popup trigger={<button 
                                onClick={() => setToggle(!toggle)} 
                                className="btn container ">
                              <h6 className='setColor setHov '>
                                <i className='bi bi-pencil-square'></i></h6>
                          </button>} position="bottom center">
                                
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
                              </div>
                            </div>
                            
                            {/* <h6> {value.numberSetINS} </h6> */}
                          {/* {toggle && ( 
                              
                            
                              <Popup trigger={<button 
                                onClick={() => setToggle(!toggle)} 
                                className="btn container ">
                              <h6 className='setColor setHov '>
                                <i className='bi bi-pencil-square'></i>Edit Institite Number</h6>
                          </button>} position="bottom center">
                                
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
                            
                            )} */}
                          </td>


                          <td>
                            <div className='row'>
                              <div className='col-sm-6'>
                              <h6> {value.mob} </h6>
                              </div>
                              <div className='col-sm-6'>
                              {toggle && 
                            ( 
                              
                            
                              <Popup trigger={<button 
                                onClick={() => setToggle(!toggle)} 
                                className="btn container ">
                              <h6 className='setColor setHov '>
                                <i className='bi bi-pencil-square'></i></h6>
                          </button>} position="bottom center">
                                          
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
                              </div>
                            </div>
                            
                            {/* <h6> {value.mob} </h6> */}
                          {/* {toggle && 
                            ( 
                              
                            
                              <Popup trigger={<button 
                                onClick={() => setToggle(!toggle)} 
                                className="btn container ">
                              <h6 className='setColor setHov '>
                                <i className='bi bi-pencil-square'></i>Edit Institite Mobile Number</h6>
                          </button>} position="bottom center">
                                          
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
                          } */}
                          </td>


              <td>
              <div className='row'>
                              <div className='col-sm-6'>
                              <h6> {value.mail} </h6>
                              </div>
                              <div className='col-sm-6'>
                              {toggle && ( 
                  
                
                  <Popup trigger={<button 
                    onClick={() => setToggle(!toggle)} 
                    className="btn container ">
                  <h6 className='setColor setHov '>
                    <i className='bi bi-pencil-square'></i></h6>
              </button>} position="bottom center">
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
                              </div>
                            </div>
                
                {/* <h6> {value.mail} </h6> */}
              {/* {toggle && ( 
                  
                
                  <Popup trigger={<button 
                    onClick={() => setToggle(!toggle)} 
                    className="btn container ">
                  <h6 className='setColor setHov '>
                    <i className='bi bi-pencil-square'></i>Edit Institite Mail</h6>
              </button>} position="bottom center">
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
                
                )} */}
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
</div>
<br/>
{/* toggle 3 End */}



  {/* Radiation Table */}  
 <div className='container'>

     

{/* radi parent div */}
<button  className='setBtnColor btn SetHov' onClick={() => setToggle2(!toggle2)} >Radiation Worker</button> <br/>
    <br/>
{toggle2 && (  
     <div>
    <div className='setTRColor text-center container-fluid'>
              <b className='h3'>Radiation Worker Details</b>
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
              <td>
              <div className='row'>
                  <div className='col-sm-6'>
                  <h6> {value.firstName}  </h6>
                  </div>
                  <div className='col-sm-6'>
                  {toggle4 && (    
    <Popup trigger={ <button 
      onClick={() => setToggle4(!toggle4)} 
      className="btn container ">
    <h6 className='setColor setHov '>
       <i className='bi bi-pencil-square'></i></h6>
</button>} position="bottom center">
      <div>
      <label>Current First Name:<input type='text' value={value.firstName}  disabled/></label>

        <label>Change First  Name:<input type='text'id='SetFName' /></label>
        <button type='button' onClick={getFName}  >Save</button>
      </div>
     </Popup>
  
  )}
                              </div>
                            </div>
                
                {/* <h6> {value.firstName}  </h6> */}
                {/* {toggle4 && (    
    <Popup trigger={ <button 
      onClick={() => setToggle4(!toggle4)} 
      className="btn container ">
    <h6 className='setColor setHov '>
       <i className='bi bi-pencil-square'></i>Edit First Name</h6>
</button>} position="bottom center">
      <div>
      <label>Current First Name:<input type='text' value={value.firstName}  disabled/></label>

        <label>Change First  Name:<input type='text'id='SetFName' /></label>
        <button type='button' onClick={getFName}  >Save</button>
      </div>
     </Popup>
  
  )} */}
</td>

{/* -------------Second Name-------------------- */}

<td>
<div className='row'>
                              <div className='col-sm-6'>
                              <h6> {value.lastName}  </h6>
                              </div>
                              <div className='col-sm-6'>
                              {toggle4 && (    
    <Popup trigger={ <button 
      onClick={() => setToggle4(!toggle4)} 
      className="btn container ">
    <h6 className='setColor setHov '>
       <i className='bi bi-pencil-square'></i></h6>
</button>} position="bottom center">
      <div>
      <label>Current Last Name:<input type='text' value={value.lastName}  disabled/></label>

        <label>Change Last  Name:<input type='text'id='SetLName' /></label>
        <button type='button' onClick={getLName}  >Save</button>
      </div>
     </Popup>
  
  )}
                              </div>
                            </div>
  
  {/* <h6> {value.lastName}  </h6> */}
                {/* {toggle4 && (    
    <Popup trigger={ <button 
      onClick={() => setToggle4(!toggle4)} 
      className="btn container ">
    <h6 className='setColor setHov '>
       <i className='bi bi-pencil-square'></i>Edit Last Name</h6>
</button>} position="bottom center">
      <div>
      <label>Current Last Name:<input type='text' value={value.lastName}  disabled/></label>

        <label>Change Last  Name:<input type='text'id='SetLName' /></label>
        <button type='button' onClick={getLName}  >Save</button>
      </div>
     </Popup>
  
  )} */}
</td>

{/* ----------intial----------- */}

<td>
  
<div className='row'>
                              <div className='col-sm-6'>
                              <h6> {value.intail}  </h6>
                              </div>
                              <div className='col-sm-6'>
                              {toggle4 && (    
    <Popup trigger={ <button 
      onClick={() => setToggle4(!toggle4)} 
      className="btn container ">
    <h6 className='setColor setHov '>
       <i className='bi bi-pencil-square'></i></h6>
</button>} position="bottom center">
      <div>
      <label>Current Name With Intials:<input type='text' value={value.intail}  disabled/></label>

        <label>Change Name With Intials:<input type='text'id='SetIName' /></label>
        <button type='button' onClick={getIName}  >Save</button>
      </div>
     </Popup>
  
  )}
                              </div>
                            </div>
  
  {/* <h6> {value.intail}  </h6> */}
                {/* {toggle4 && (    
    <Popup trigger={ <button 
      onClick={() => setToggle4(!toggle4)} 
      className="btn container ">
    <h6 className='setColor setHov '>
       <i className='bi bi-pencil-square'></i>Edit Name With Intial</h6>
</button>} position="bottom center">
      <div>
      <label>Current Name With Intials:<input type='text' value={value.intail}  disabled/></label>

        <label>Change Name With Intials:<input type='text'id='SetIName' /></label>
        <button type='button' onClick={getIName}  >Save</button>
      </div>
     </Popup>
  
  )} */}
</td>

{/* --------Mobile number-worker--------- */}

<td>
<div className='row'>
                              <div className='col-sm-6'>
                              <h6> {value.mobileNum}  </h6>
                              </div>
                              <div className='col-sm-6'>
                              {toggle4 && (    
    <Popup trigger={ <button 
      onClick={() => setToggle4(!toggle4)} 
      className="btn container ">
    <h6 className='setColor setHov '>
       <i className='bi bi-pencil-square'></i></h6>
</button>} position="bottom center">
      <div>
      <label>Current Mobile Numebr :<input type='text' value={value.mobileNum}  disabled/></label>

        <label>Change Mobile Number:<input type='text'id='SetWorkerNum' /></label>
        <button type='button' onClick={getWorkNum}  >Save</button>
      </div>
     </Popup>
  
  )}
                              </div>
                            </div>
  
  {/* <h6> {value.mobileNum}  </h6> */}
                {/* {toggle4 && (    
    <Popup trigger={ <button 
      onClick={() => setToggle4(!toggle4)} 
      className="btn container ">
    <h6 className='setColor setHov '>
       <i className='bi bi-pencil-square'></i>Edit Mobile Number</h6>
</button>} position="bottom center">
      <div>
      <label>Current Mobile Numebr :<input type='text' value={value.mobileNum}  disabled/></label>

        <label>Change Mobile Number:<input type='text'id='SetWorkerNum' /></label>
        <button type='button' onClick={getWorkNum}  >Save</button>
      </div>
     </Popup>
  
  )} */}
</td>

{/* --------Email ID---------- */}

<td>
<div className='row'>
                              <div className='col-sm-6'>
                              <h6> {value.workerEmail}  </h6>
                              </div>
                              <div className='col-sm-6'>
                              {toggle4 && (    
    <Popup trigger={ <button 
      onClick={() => setToggle4(!toggle4)} 
      className="btn container ">
    <h6 className='setColor setHov '>
       <i className='bi bi-pencil-square'></i></h6>
</button>} position="bottom center">
      <div>
      <label>Current E-Mail Id:<input type='text' value={value.workerEmail}  disabled/></label>

        <label>Change E-Mail Id:<input type='text'id='SetWorkerMail' /></label>
        <button type='button' onClick={getWorkMail}  >Save</button>
      </div>
     </Popup>
  
  )}
                              </div>
                            </div>
  
  {/* <h6> {value.workerEmail}  </h6> */}
                {/* {toggle4 && (    
    <Popup trigger={ <button 
      onClick={() => setToggle4(!toggle4)} 
      className="btn container ">
    <h6 className='setColor setHov '>
       <i className='bi bi-pencil-square'></i>Edit E-Mail Id</h6>
</button>} position="bottom center">
      <div>
      <label>Current E-Mail Id:<input type='text' value={value.workerEmail}  disabled/></label>

        <label>Change E-Mail Id:<input type='text'id='SetWorkerMail' /></label>
        <button type='button' onClick={getWorkMail}  >Save</button>
      </div>
     </Popup>
  
  )} */}
</td>



<td>
  
<div className='row'>
                              <div className='col-sm-6'>
                              <h6> {value.workerDOB} </h6>

                              </div>
                              <div className='col-sm-6'>
                              {toggle4 && ( 
    
   
    <Popup trigger={ <button 
      onClick={() => setToggle4(!toggle4)} 
      className="btn container ">
    <h6 className='setColor setHov '>
       <i className='bi bi-pencil-square'></i></h6>
</button>} position="bottom center">
      <div>
      <label>Current Date Of Birth :<input type='text' value={value.workerDOB}  disabled/></label>

        <label>Change Date Of Birth:<input type='date'id='SetWorkerDOB' /></label>
        <button type='button' onClick={getWorkDOB}  >Save</button>
      </div>
     </Popup>
  
  )}
                              </div>
                            </div>
  {/* <h6> {value.workerDOB} </h6> */}
{/* {toggle4 && ( 
    
   
    <Popup trigger={ <button 
      onClick={() => setToggle4(!toggle4)} 
      className="btn container ">
    <h6 className='setColor setHov '>
       <i className='bi bi-pencil-square'></i>Edit Date Of Birth </h6>
</button>} position="bottom center">
      <div>
      <label>Current Date Of Birth :<input type='text' value={value.workerDOB}  disabled/></label>

        <label>Change Date Of Birth:<input type='date'id='SetWorkerDOB' /></label>
        <button type='button' onClick={getWorkDOB}  >Save</button>
      </div>
     </Popup>
  
  )} */}
</td> 

    </tr>
      </tbody>
    </table> 

            </div>)}


{/* radi  parent div end  */}
 </div>
           

 </div>)}


{/* // ------------------ parent div end------------ */}
        </div>


    )
}

export default Search;