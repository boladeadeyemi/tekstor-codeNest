import React from 'react'
import './Orders.css'
import { getBasketTotal } from '../../reducer'
import { useStateValue } from '../../StateProvide';
import {useHistory } from 'react-router-dom';




function Orders() {
    const history = useHistory();
    const [{basket, user}, dispatch ] = useStateValue();
    const toHome = () => {
      history.push("/home")
      window.location.reload()
    }; 

  return (
    <div className='orders'>
       <h1>Your Orders Report</h1> 
        <p>{user?.email}, your Order of ${getBasketTotal(basket)} is successfull. </p>
        <button onClick={toHome}>Go back to the Home Page</button>
        
    </div>
  )
}

export default Orders