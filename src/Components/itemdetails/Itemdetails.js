import React from 'react'
import './Itemdetails.css'
import { useStateValue } from '../../StateProvide'

function Itemdetails({id, image, name, price, description} ) {
  const [{basket}, dispatch] = useStateValue();
  const removeFromBasket = () => {
    //removes from the basket
    dispatch({
      type: 'REMOVE_FROM_BASKKET',
      id: id,  
    })
  }

  return (
    <div className= "itemouter__productpage">
        <div className="leftDiv__productpage">
                <img src={image} alt= "selectedPix" />
            </div>
                    <div className="rightDiv__productpage">
                            <div className="textDiv__productpage">
                            <p>{name} </p> <span>N{price}</span>
                            </div>
                            <div className="itemDes__productpage"><p>{description}</p>
                            </div>
                        
                            <div className="D32__productpage"><h3 >32 sold</h3></div>
                            <div className="buttons__productpage">
                                <button  onClick={removeFromBasket} className="btn1__productpage">REMOVE FROM CART</button>
                            </div>
                    </div>
                </div>
  )
}

export default Itemdetails