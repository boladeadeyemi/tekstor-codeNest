import React from 'react'
import './Product.css'
import Itemdetails from '../itemdetails/Itemdetails'
import { useStateValue } from '../../StateProvide'
import { getBasketTotal } from '../../reducer';
import { useNavigate } from 'react-router-dom';
// import Subtotal from '../subtotal/Subtotal'

function Product() {
  const [{basket,user}, dispatch] = useStateValue()
  const navigate = useNavigate();

  return (
    <div className="product">
        <div className="item__productpage">
        <p className="title"> ITEM DETAILS</p>
        <h3>These are your item details, {user?.email}. You have {basket?.length} items</h3>
        <div className='basket__container'>
        {basket.map(item => (
          <Itemdetails 
          id = {item.id}
          name = {item.name}
          description = {item.description}
          price = {item.price}
          image = {item.image}       
          />
        ))}
        </div>
        
        </div>
         

        <div className="checkout__right">
            <p>Subtotal:  N{getBasketTotal(basket)}</p>
            <button onClick={ () => navigate("/review")}>Proceed to Review</button>
        </div>


    </div>
  )
}

export default Product