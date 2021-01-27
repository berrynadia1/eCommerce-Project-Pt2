import React, { Component } from 'react';
import ImageSlider from './ImageSlider';
import SliderInfo from './SliderInfo';

class Homepage extends Component{
    render(){
        return(
           <div className="homepage-headerContainer" >
               <ImageSlider slides={SliderInfo} />
        <h1 className="homepage-content">Welcome to Shoe World!</h1>
        <h2 className="homepage-content">Looking for some great shoes but don't know where to turn?<br/> Here we have everything you need! From sneakers and heels to boots, we got it! <br/>Explore our website and find what you are looking for at Shoe World!</h2>
                
    </div>
)
            
        
 }  
}

export default Homepage;