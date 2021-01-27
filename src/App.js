import React, {Component} from 'react'
import  './App.css';
import NavBar from './Components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Products from './Components/Product/Products';
import Homepage from './Components/Home/Homepage';
import Contacts from './Components/Contact/Contacts';
import Footer from './Components/Footer'
// import ImageSlider from './ImageSlider';
// import SliderInfo from './SliderInfo';

class App extends Component  {
    render(){
  return (
      <Router>
     <NavBar />
     <Switch>
     {/* <ImageSlider slides={SliderInfo} /> */}
     <Route path="/homepage"  exact component={Homepage} />
     <Route path="/products" component={Products} />
     <Route path="/contacts" component={Contacts} />
     </Switch>
     <Footer />
</Router>
  );
}

}




export default App;
