import React from 'react'
import './Orders.css'
import { getBasketTotal } from '../../reducer'
import { useStateValue } from '../../StateProvide';
import { Link } from 'react-router-dom';



function Orders() {
    const [{basket, user}, dispatch ] = useStateValue();
  return (
    <div className='orders'>
       <h1>Your Orders Report</h1> 
        <p>{user?.email}, your Order of ${getBasketTotal(basket)} is successfull. </p>
        <Link to = '/home'><button>Go back to the Home Page</button></Link>
        
    </div>
  )
}

export default Orders