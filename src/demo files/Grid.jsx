    import React, { useState } from 'react'
    import './App.css'
    import Popup from 'reactjs-popup';
    import 'reactjs-popup/dist/index.css';
    // import Grid from './Grid';
    const Grid = () =>{
    
        const [toggle, setToggle] = useState(false);
        // const [toggle2, setToggle2] = useState(false);
        const [toggle3, setToggle3] = useState(false);
        // const [toggle4, setToggle4] = useState(false);
    
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
    
    
        const SetAlert = () =>{
          alert( "Mail has been Sent Successfully with "+"UserID : "+ value.numberSetINS + "&"  + "Password:"+value.PassWord)
        }
    
          const NewAlert = () =>{
            const Id = document.getElementById("IDSet").value
            const PassWord = document.getElementById("PassWordSet").value
            alert("New UserID: " +Id+ " & " +" New PassWord:"+ PassWord +" has been Sent Successfully ")
          }

    return(
        <div>
            <div class="container">
  <div class="row border border-dark">
    

    <div class="col-sm border border-dark">
            <b>Institute Name </b>
    </div>

    <div class="col-sm border border-dark">
       <b>Institute Number</b>     </div>

            <div class="col-sm border border-dark">
                <b>Mobile Number</b> 
            </div>

    <div class="col-sm border border-dark">
              <b>Institute Mail</b> 
    </div>
    
    <div class="col-sm border border-dark">
                        <button 
                            className="btn container setColor sethov"
                            onClick={SetAlert}
                            >
                              Send Credential Mail 
                            </button>    </div>
  </div><div class="row border border-dark">

<div class="col-sm border border-dark">
<h6 className='mt-3'> {value.name} </h6>
{toggle && ( 
    
   
    <Popup trigger={<button className='container btn HovSet'>
         <i className='bi bi-pencil-square'></i>Edit Name 
         </button>} position="right center">
      <div>
      <label>Current Name:<input type='text' value={value.name}  disabled/></label>
        <label>Change Name:<input type='text'id='nameSet' /></label>
        <button type='button' onClick={getName}  >Save</button>
      </div>
     </Popup>
  
  )}
</div>

<div class="col-sm border border-dark">
<h6 className='mt-3'> {value.numberSetINS} </h6>
{toggle && ( 
    
   
    <Popup trigger={<button className='container btn HovSet'>
         <i className='bi bi-pencil-square'></i>Edit Institute Number 
         </button>} position="right center">
      <div>
      <label>Current Institute Number:<input type='text' value={value.numberSetINS}  disabled/></label>

        <label>Change Institute Number:<input type='text'id='SetINSNum' /></label>
        <button type='button' onClick={getNumberINS}  >Save</button>
      </div>
     </Popup>
  
  )}</div>

<div class="col-sm border border-dark">
<h6 className='mt-3'> {value.mob} </h6>
{toggle && ( 
    
   
    <Popup trigger={<button className='container btn HovSet'>
         <i className='bi bi-pencil-square'></i>Edit Mobile Number 
         </button>} position="right center">
      <div>
      <label>Current Mobile Number:<input type='number' value={value.mob}  disabled/></label>

        <label>Change Mobile Number:<input type='number'id='SetMobNum' /></label>
        <button type='button' onClick={getNumberMob}  >Save</button>
      </div>
     </Popup>
  
  )}</div>

<div class="col-sm border border-dark">
<h6 className='mt-3'> {value.mail} </h6>
{toggle && ( 
    
   
    <Popup trigger={<button className='container btn HovSet'>
         <i className='bi bi-pencil-square'></i>Edit Mail 
         </button>} position="right center">
      <div>
      <label>Current Mail:<input type='mail' value={value.mail}  disabled/></label>
        <label>Change Mail:<input type='mail'id='SetMail' /></label>
        <button type='button' onClick={getMail}  >Save</button>
      </div>
     </Popup>
  
  )}</div>

<div class="col-sm border border-dark">
<button 
            onClick={() => setToggle(!toggle)} 
            className="btn container ">
          <h6 className='setColor setHov '>
             <i className='bi bi-pencil-square'></i>Edit</h6>
      </button> 
      <button className="btn container " onClick={() => setToggle3(!toggle3)}>
       <h6 className='setColor setHov '> Reset & Send Credential Mail</h6>
        </button>
        {toggle3 && ( 
    
   <div>
        <p>Current UserId:<input type='text'  value={value.numberSetINS} disabled/></p>
        <p>New UserId:<input type='text'id='IDSet' /></p>
        <p>Current PassWord:<input type='text' value={value.PassWord} disabled/></p>
        <p>New Pass Word:<input type='text'id='PassWordSet' /></p>
        <button type='button' onClick={NewAlert} >Send Mail</button>
   </div>
  )}
</div>
</div>
</div>
        </div>
    )
}

export default Grid;