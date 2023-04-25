import React, { useState } from 'react' 
const Hideshow = () =>{
    const [toggle, setToggle] = useState(false)
    return(
        <>
        <table class="table">
  <thead>
    <tr>
    <th scope="col">
        Institute Name
                        </th>
                        <th scope="col">
                            Mobile Numeber
                        </th>
                        <th scope="col">
                            Institute Mail
                        </th>
                        <th scope="col">
                            Credential Mail
                        </th>
                        <th scope="col">
                            Radation Worker Name
                        </th>

                        <th scope="col">
                            Radation Worker DOB
                        </th>
                 </tr>
  </thead>
  <tbody>
    <tr>
      <td><h4>Avanttec</h4>
          {toggle && (  <button className='container'>Edit Name </button>   )}
       </td>
      <td>
      <h4>9600198622</h4>
       {toggle && (  <button className='container'>Edit Mobile </button>   )}
      </td>
      <td className='m-2 p-2'>
                    <h4>avantmedical@gmail.com</h4>
                    {toggle && (<button className='container'>
                        Edit Institute Mail 
                        </button>   )}
                    </td>

                    <td className='m-2 p-2'>
                    <h4>avantnetmedical@gmail.com</h4>
                    {toggle && (  <button className='container'>
                        Edit Credential Mail 
                        </button>   )}
                    </td>

                    <td className='m-2 p-2'>
                    <h4>sana</h4>
                    {toggle && (  <button className='container'>
                        Edit Radiation Worker Name
                        </button>   )}
                    </td>
                    <td className='m-2 p-2'>
                    <h4>20/01/2002</h4>
                    {toggle && (  <button className='container'>
                        Edit DOB 
                        </button >   )}
                    </td>
      
      <td><button 
            onClick={() => setToggle(!toggle)} 
            className="btn container ">
          <h4 className='setHov '>Edit</h4>
      </button> </td>
    </tr>
  </tbody>
</table>
        </>
    )
}

   
export default Hideshow  