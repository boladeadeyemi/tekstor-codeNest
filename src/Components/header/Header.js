import React from 'react'
import './Header.css'
import image from '../../assets/logo.png'
import cartimage from '../../assets/cart.png'
import maleavatar from '../../assets/male-avatar.png'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../StateProvide'
import { auth } from '../firebase'

function Header() {
    const [{basket, user}, dispatch ] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut(); 
        }
    }
  return (
    <div>
        <div className="bg1">
            </div>
            <div className="container__homepage">
            <div className="left__homepage">
               <Link to = '/home'><img src={image} alt="tekstor logo" /></Link>
             </div>
            
            
             
            <div className="center__homepage">
            <div className="pages__homepage">
                GADGETS
            </div>
            <div className="pages__homepage">
                VIDEOS
            </div>
            <div className="pages__homepage">
                BOOKS
            </div>
            <div className="pages__homepage">
                AUDIO
            </div>
             </div>
             <div className="lefthand__homepage">
            <div className="cart__homepage">
                <Link to = '/product'><img src={cartimage} alt="" /></Link>
                <span className="cart__number">{basket?.length}</span>
            </div>

            </div>
            <div className="righthand__homepage">
            <div className="maleavatar__homepage">
                <img src={maleavatar} alt="" />
            </div>

            </div>
            <div onClick={handleAuthentication} classname = "hello__guest">
                <p>Hello {user?.email}</p>
                <Link to = {!user && '/Login'}><span>{user?'Sign Out' : 'Sign In'}</span></Link>
            </div>
            </div>

    </div>
  )
}

export default Header