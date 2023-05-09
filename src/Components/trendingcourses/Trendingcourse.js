import React from 'react'
import './Trendingcourse.css'

function Trendingcourse({id, image2, name2, description2, price2}) {
  return (
    <div className="coursetrending__homepage">
   
    <div className="coursetrendingContainer__homepage">
      <img src={image2} alt="" />
      <div className="coursetrendingDescription__homepage">
        <h4>{name2}</h4>
        <p>{description2}</p>
        <div className="coursetrendingaddToCart__homepage">
          <h4>${price2}</h4>
          <button>ADD TO CHART</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Trendingcourse