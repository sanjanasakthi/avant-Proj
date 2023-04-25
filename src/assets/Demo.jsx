import React, { useState } from 'react'
import './Comp.css'
const LogicalNot = () => {

    const [toggle, setToggle] = useState(false)

  return (
    < div className='setBG'>
    <table>
        <tr>
            <td className='m-3 p-3'>
                <h1>Name</h1>
                {toggle && (  <button>edit name </button>   )}
                </td>
                <td className='m-3 p-3'>
                <h1>Mail</h1>
                    {toggle && (  <button>edit Mail </button>   )}
                    </td>
                    <td className='m-3 p-3'>
                    <h1>Mobile</h1>
                    {toggle && (  <button>
                        edit mobile 
                        </button>   )}
                    </td>
                    <td>
                    <button 
            onClick={() => setToggle(!toggle)} 
            className="btn ">
          <h1 className='setColor'>Edit</h1>
      </button> 
                    </td>
                 
            </tr>
        </table>
    </div>
  )
}
export default LogicalNot;