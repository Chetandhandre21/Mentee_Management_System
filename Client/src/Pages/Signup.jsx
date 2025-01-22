

import signim from "./img/sign.jpg"
import './Css/sign.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Signup = () => {
  const [name, setName] = useState()
      const [email, setEmail] = useState()
      const [pass, setPass] = useState()
      const navigate=useNavigate()
      const handleSubmit=(e)=>{  
        e.preventDefault();
        axios.post('http://localhost:3001/signup',{name,email,pass})
        .then(result=>{console.log(result)
        navigate('/student/login')
        

        }
    )
        .catch(err=>console.log(err))
      }
    
  return (
    <>
    <div className="parent">
      <div className="subp">
        <div className="siimg">
          <img src={signim} alt="" className="signpng" />
        </div>
        <div className="sicont">
          
          <div className="hed">
            <h2 className="hedcon">Welcome Student!</h2>                                         
          </div>
          <form id="signupForm" onSubmit={handleSubmit}>
          <div className="sname">
            <input type="text" name="name" placeholder="Enter Name" className="ncon"   onChange={(e)=>setName(e.target.value)} />
          </div>
          <div className="semail">
            <input type="email"  name="email"placeholder="Enter Email" className="econ"    onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className="spass">
            <input type="password" name="pass" placeholder="Enter Password" className="pcon"  onChange={(e)=>setPass(e.target.value)} />
          </div>
          <div className="sbtn">
            <button className="sup">Sign Up</button>
          
           
          </div>  </form>
          <div className="cap">
            <Link to="/student/login">
            <h5 className="caption23">Already have an Account?</h5>
            </Link>
            {/* <Link to="/mentor">
            <h5 className="caption23">Login As Mentor</h5>
            </Link> */}
              {/* <h5 className="caption">Already have an Account?</h5> */}
            </div>
        </div>
        
      </div>
      
    </div>
    
    
    </>
  )
}

export default Signup