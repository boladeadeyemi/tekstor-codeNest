import React from 'react'
import './Product.css'
// import Trendinggadgets from '../trendinggadgets/Trendinggadgets'
// import {trendinggadgets } from '../Dummy/Dummy'
// import Trendingcourse from '../trendingcourses/Trendingcourse'
import Itemdetails from '../itemdetails/Itemdetails'
import { useStateValue } from '../../StateProvide'
import Subtotal from '../subtotal/Subtotal'

function Product() {
  const [{basket,user}, dispatch] = useStateValue()

  return (
    <div className="product">
            <div className="bg1__productpage">
            </div>
              {/* <div className="user__greeting">
                  
              </div> */}

        <div>
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
         
        </div>


  


    <div className="checkout__right">
           <Subtotal/>
        </div>


    </div>
  )
}

export default Product