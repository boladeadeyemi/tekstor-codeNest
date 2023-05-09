import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../StateProvide';
import { useHistory } from 'react-router-dom';
import { getBasketTotal } from '../../reducer';

function Subtotal() {
    const history = useHistory();
    const [{basket}] = useStateValue();
  return (
    <div className='subtotal'>
        <CurrencyFormat
        renderText= {(value) => (
        <> 
        <p> Subtotal ({basket.length} items): <strong>{value}</strong> </p>
          <small className="subtotal__gift">
            <input type="checkbox" /> This order contains a gift
          </small>
          </>
        )}
         decimalScale={2}
        value={getBasketTotal(basket)} 
        displayType = {"text"}
        thousandSeparator = {true}
        prefix = {"$"}
        />

        <button onClick={e => history.push('/review')}>Proceed to Review</button>
    </div>
  )
}

export default Subtotal