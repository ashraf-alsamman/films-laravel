import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import StarRatings from 'react-star-ratings';
 

export default class Rating extends Component {

    constructor(){
        super()
        this.state  = {  
            ratingData :rating,
             film_id :film_id,
            } 
 
  }

 
 

 

   
     
 

    render() {
 
 
        return (
            <StarRatings
            rating={this.state.ratingData}
            starRatedColor="orange"
            numberOfStars={5}
            starDimension='15px'
            starSpacing='5px'
        />
        );
    }
}

if (document.getElementById('Rating')) {
    ReactDOM.render(<Rating />, document.getElementById('Rating'));
}
