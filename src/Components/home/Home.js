import React from 'react'
import './Home.css'
import searchIcon from '../../assets/search-icon.png'
import image4 from "../../assets/mg.png"
import image1 from "../../assets/Mask group (1).png"
import image2 from "../../assets/Mask group (2).png"
import image3 from "../../assets/Mask group (3).png"
import Trendinggadgets from '../trendinggadgets/Trendinggadgets'
import { trendinggadgets } from '../Dummy/Dummy'
// import Trendingcourse from '../trendingcourses/Trendingcourse'
import { useStateValue } from '../../StateProvide'
import circle from '../../assets/ring.png'



function Home() {
    const [{basket}, dispatch ] = useStateValue();
  return (
    <div className="Home">
            <div className="ring__homepage">
                <img src={circle} alt="ring" />
            </div>
            <div className="find__homepage">
            <h1>FIND ANY TECH <br></br> RESOURCES EASILY!</h1>
            </div>
            <div className="searchinput__homepage">
                <input type="text" className="home__search" />
                <img src={searchIcon} alt="searchIcon" /> 
            </div>
            <div className="cards__homepage"><div> <p className="title__homepage">FIND BY CATEGORY</p>
        <div className="mainDiv__homepage">
            <div>
                <div>
                    <div className="innerDiv__homepage">
                        <img src={image4} alt = 'alllt' /> 
                        <div className="innerInner__homepage">
                            <h1 className="textUp">VIDEO</h1>
                            <h1 className="textDown">COURSES</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className="innerDiv__homepage">
                        <img src={image1} alt = 'alllt' /> 
                        <div className="innerInner__homepage">
                            <h1 className="textUp">E BOOK</h1>
                            <h1 className="textDown">COURSES</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className="innerDiv__homepage">
                        <img src={image2} alt = 'alllt' /> 
                        <div className="innerInner__homepage">
                            <h1 className="textUp">AUDIO</h1>
                            <h1 className="textDown">COURSES</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className="innerDiv__homepage">
                        <img src={image3} alt = 'alllt' /> 
                        <div className="innerInner__homepage">
                            <h1 className="textUp">TECH</h1>
                            <h1 className="textDown">GADGETS</h1> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
     <div>
    
 
    <div id='gadgets'  className="similarItems__homepage">
      <h1>TRENDING GADGETS</h1>
    <div class= 'trendinggadgets__row'>
        {trendinggadgets.map(data => (
          <Trendinggadgets
          id ={data.id}
          name = {data.name}
          description={data.description}
          image = {data.image}
          price = {data.price}
          />
          
        ))}
    </div>
        
    </div>
    </div>


    {/* <div className="coursetrending__homepage">
       <h1>TRENDING COURSES</h1>
      <div className="coursetrending__row"> 
      {trendingcourses.map(data => (
          <Trendingcourse
          id2 ={data.id}
          name2 = {data.name}
          description2={data.description}
          image2 = {data.image}
          price2 = {data.price}
          />
          
        ))}
      </div>
    </div> */}
    </div>
  )
}

export default Home