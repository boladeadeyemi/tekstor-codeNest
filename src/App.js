import './App.css';
import Checkout from './Components/checkout/Checkout';
import Login from './Components/login/Login'
import Signup from './Components/signup/Signup';
import Product from './Components/product/Product'
import Home from './Components/home/Home';
import Landingpage from './Components/landingpage/landingpage';
import Header from './Components/header/Header';
import { useEffect } from 'react';
import { auth } from './Components/firebase';
import { useStateValue } from './StateProvide';
import Orders from './Components/orders/Orders';
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Header1 from './Components/header1/Header1';
import Review from './Components/review/Review';


function OrderComponent(){
  return (
    <>
      <Header1/>
      <Orders/>
    </>
  );
}

function HomeComponent(){
  return (
    <>
      <Header/>
      <Home/>
    </>
  );
}

function ProductComponent(){
  return (
    <>
      <Header/>
      <Product/>
    </>
  );
}

function ReviewComponent(){
  return (
    <>
      <Header/>
      <Review/>
    </>
  );
}

function CheckoutComponent(){
  return (
    <>
      <Header/>
      <Checkout/>
    </>
  );
}

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
          <div className="App">
              <BrowserRouter>
                <Routes>
                    <Route path ="/orders" element = {<OrderComponent/>}/>
                    <Route path ="/" element = {<Landingpage/>} />
                    <Route path = "/login" element = {<Login/>}/>
                    <Route path = "/signup" element ={ <Signup/>} />
                    <Route path = "/product" element= {<ProductComponent/>} />
                    <Route path = "/checkout" element = {<CheckoutComponent/>} />
                    <Route path = "/home" element = {<HomeComponent/>} />
                    <Route path = "/review" element = {<ReviewComponent/>} />
                    <Route path = "*" 
                    element = {<div><p>Page not found</p><Link to = "/">Go to Landingpage</Link></div>}/>
                </Routes>
              </BrowserRouter> 
          </div>
  );
}

export default App;
