import React, { useState } from 'react'
import './Signup.css'
import image from '../../assets/logo.png'
import circle5 from '../../assets/ring.png'
import registerimage from '../../assets/register.png'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'

function Signup() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const signIn = e =>{
    //     e.preventDefault()

    //     //some fancy firebase login 
    // }

    const register = e => {
        e.preventDefault()
        //do some fancy firebase shit
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //it successfully created a new user with email and password
                if (auth) {
                    navigate('/home')
                }
            })
            .catch(error => alert(error.message))

    }

  return (
    <div className="signup">
    <div className="container__signuppage">
    <div className="left__signuppage">
        <Link to = '/'><img src={image} alt="tekstor logo"/></Link>
     </div>
    <div className="center__signuppage">
    <div className="pages__signuppage">
        GADGETS
    </div>
    <div className="pages__signuppage">
        VIDEOS
    </div>
    <div className="pages__signuppage">
        BOOKS
    </div>
    <div className="pages__signuppage">
        AUDIO
    </div>
     </div>
     <div className="lefthand__signuppage">
    <div className="login__signuppage">
        <Link to = '/login'> LOGIN</Link>
    </div>

    </div>
    <div className="righthand__signuppage">
    <div className="signup__signuppage">
        <Link to = '/signup'>SIGN UP</Link>
    </div>
    </div>
    </div>
   
    <div className="ring5__signup">
        <img src={circle5} alt="ring" />
    </div>
    <div className="signup__word">
    <h1>SIGNUP</h1>
    </div>
    
    
    
    <div><div className='register'>
        <div className="registerContainer">
            <div className="leftRegisterContainer">
                <p>Sign up to begin shopping</p>
                <img src={registerimage} alt="" />
            </div>
            <div className="rightRegisterContainer">
                <form>
                    <input type="text" placeholder='Name'/>
                    <input type="email" placeholder='Email' value={email} onChange={e => setEmail (e.target.value)}/>
                    <input type="text" placeholder='Username'/>
                    <input type="password" placeholder='Password' value={password} onChange={e => setPassword (e.target.value)}/>
                </form>
                <button className='button__signup' onClick={register}>SIGN UP</button>
                <p>Already have an account? <span onClick={() => navigate("/login")}>Login</span></p>
            </div>
        </div>
    </div></div>
</div>
  )
}

export default Signup