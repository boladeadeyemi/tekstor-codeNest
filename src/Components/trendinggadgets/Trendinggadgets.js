import React from 'react'
import './Trendinggadgets.css'
import { useStateValue } from '../../StateProvide'

function Trendinggadgets({id, image, name, description, price}) {

  const [{basket}, dispatch] = useStateValue();

  const addToCart = () =>{
    //dispatch into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id:id,
        image: image,
        name: name,
        price: price,
        description: description  
        }
    })
  }

  return (
    <div className="similarItems__homepage">
   
    <div className="similarItemsContainer__homepage">
      <img src={image} alt="" />
      <div className="similarItemsDescription__homepage">
        <h4>{name}</h4>
        <p>{description}</p>
        <div className="addToCart__homepage">
          <h4>N{price}</h4>
          <button onClick={addToCart}>ADD TO CHART</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Trendinggadgets