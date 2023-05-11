import React from 'react'
import './Review.css'
import { useStateValue } from '../../StateProvide'
import { useNavigate } from 'react-router-dom';
import Itemdetails from '../itemdetails/Itemdetails';

function Review() {
        const navigate = useNavigate();
        const [{basket, user}, dispatch ] = useStateValue();
  return (
            <div className="find__reviewpage">
            <h1>REVIEW ITEMS IN YOUR CART</h1>
            <p>{user?.email}</p>

                        <div className="cart2__reviewpage">                       
                                 {/* section two */}
                                <div className="rightDiv__reviewpage">
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
                                <button className='btn1__reviewpage' onClick={() => navigate("/checkout")}>Proceed to Checkout</button>
                        </div>
                        
                </div>
  )
}

export default Review