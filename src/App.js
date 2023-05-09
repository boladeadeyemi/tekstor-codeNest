import './App.css';
import Checkout from './Components/checkout/Checkout';
import Review from './Components/review/Review';
import Login from './Components/login/Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './Components/signup/Signup';
import Product from './Components/product/Product'
import Home from './Components/home/Home';
import Landingpage from './Components/landingpage/landingpage';
import Header from './Components/header/Header';
import { useEffect } from 'react';
import { auth } from './Components/firebase';
import { useStateValue } from './StateProvide';
import Orders from './Components/orders/Orders';
import Header1 from './Components/header1/Header1';


function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //will only run once when the app component loads.
    auth.onAuthStateChanged(authUser => {

      if  (authUser){
        //the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (

  
          <Router>
          <div className="App">  
                <Switch>
                <Route exact path ='/orders'>
                  <Header1/>
                  <Orders/>
                  </Route>
                  <Route exact path ='/'>
                  <Landingpage/>
                  </Route>
                <Route exact path = '/login'>
                   <Login/>
                 </Route>
                 <Route exact path = '/signup'>
                   <Signup/>
                 </Route>
                 <Route exact path = '/product'>
                    <Header/>
                   <Product/>
                 </Route>
                 <Route exact path = '/review'>
                    <Header/>
                   <Review/>
                 </Route>
                 <Route exact path = '/checkout'>
                    <Header/>
                    <Checkout/> 
                 </Route>
                 <Route exact path = '/home'>
                   <Header/>
                   <Home/>
                 </Route>
                 
                 

              </Switch>
             </div>
           </Router>
    
  );
}

export default App;
