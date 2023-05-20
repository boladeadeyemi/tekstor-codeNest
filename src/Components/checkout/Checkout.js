import React from 'react'
import './Checkout.css'
import circle from '../../assets/ring.png'
import { useStateValue } from '../../StateProvide'
import Itemdetails from '../itemdetails/Itemdetails'
import { getBasketTotal } from '../../reducer'
import { useNavigate } from 'react-router-dom'


function Checkout() {
    const [{basket, user}, dispatch ] = useStateValue();

    const navigate = useNavigate();

    const handlePay = () => {
        const publicKey = 'pk_test_abd4fe48f4c43021b4bf83c38ee61e2a05bbd98e';
        const reference = `ref-${Math.floor(Math.random() * 10e8)}`;
        
        
        const handler = window.PaystackPop.setup(
          {
          key: publicKey,
          email:user?.email,
          amount: getBasketTotal(basket) * 100,
          ref: reference,
          onClose: () => {
            console.log('Payment closed');
          },
          callback: (response) => {
            console.log(response);
          },
        });
        
        handler.openIframe();
        navigate('/orders')
      };



  return (
    <div className="checkout__outercontainer">
        <div className="ring__checkout">
                <img src={circle} alt="ring" />
            </div>
            <div className="checkout__word">
            <h1>CHECKOUT YOUR <br></br>ITEMS!</h1>
            </div>

            <div>
                <div className="checkoutContainer">
                    <p>Hey {user?.email}</p>
                <h4 className='paymentDetails'>You are about to pay the 
                    sum of N{getBasketTotal(basket)} only, for the following:</h4>

            <div className="rightCheckoutContainer">
                
                    <div className="subRightCheckoutContainer">
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
            {/* <div className="leftCheckoutContainer"> */}
            {/* // section three */}
            <div className="payment__section">
                <button onClick={handlePay}>PAY NOW</button>
            </div>
            {/* </div> */}
        </div></div>
</div>
    
  )
}

export default Checkout