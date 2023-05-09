import React from 'react'
import './Review.css'
import { Link, useHistory } from 'react-router-dom'
import { useStateValue } from '../../StateProvide'
import Itemdetails from '../itemdetails/Itemdetails'

function Review() {
        const history = useHistory();
        const [{basket, user}, dispatch ] = useStateValue();
  return (
            <div className="find__reviewpage">
            <h1>REVIEW ITEMS IN YOUR <br></br> CART</h1>
           

                        <div className="cart2__reviewpage">                       
                                 {/* section two */}
                                <div className="rightDiv__reviewpage">
                                        <div className='textDiv__reviewpage'>
                                        <h3>Review Items and Delivery</h3>
                                        </div>
                                        <div className="itemDes__reviewpage">
                                        {basket.map(item =>(
                                                <Itemdetails
                                                id= {item.id}
                                                name = {item.name}
                                                image = {item.image}
                                                price = {item.price}
                                                description = {item.description}
                                                />
                                        ))}
                                        </div>


                                </div>
                                <button className='btn1__reviewpage' onClick={e => history.push('/checkout')}>Proceed to Checkout</button>
                        </div>
                        
                </div>
  )
}

export default Review