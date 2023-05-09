import React from 'react'
import './landingpage.css'
import image from '../../assets/logo.png'
import circle2 from '../../assets/ring.png'
import { Link } from 'react-router-dom'

function Landingpage() {
  return (
    <div className="Landing__page">
            <div className="bg1__landingpage">
            </div>
            <div className="container__landingpage">
            <div className="left__landingpage">
                <Link to = '/'><img src={image} alt="tekstor logo" /></Link>
             </div>
            <div className="center__landingpage">
            <div className="pages__landingpage">
                GADGETS
            </div>
            <div className="pages__landingpage">
                VIDEOS
            </div>
            <div className="pages__landingpage">
                BOOKS
            </div>
            <div className="pages__landingpage">
                AUDIO
            </div>
             </div>
             <div className="lefthand__landingpage">
            <div className="login__landingpage">
                <Link to ="/login">LOGIN</Link>
            </div>

            </div>
            <div className="righthand__landingpage">
            <div className="signup__landingpage">
                <Link to ="/signup">SIGN UP</Link>
            </div>
            </div>
            </div>
            <div className="ring3__landingpage">
                <img src={circle2} alt="ring" />
            </div>
            <div className="find__landingpage">
            <h1>FIND ANY TECH <br></br> RESOURCES EASILY!</h1>
            </div>
            <div className="signuplogin__landingpage">
                SIGN UP / LOGIN
            </div>
            
    </div>
  )
}

export default Landingpage