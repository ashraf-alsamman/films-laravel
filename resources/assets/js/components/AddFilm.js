import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Slug from 'react-slug';

import DatePicker from 'react-datepicker';
import moment from 'moment';
 
import 'react-datepicker/dist/react-datepicker.css';


 

import SelectPicker from "react-select-picker";

import StarRatings from 'react-star-ratings';

 

export default class AddFilm extends Component {

    constructor(){
        super()
        this.state  = { nameV: false , countries: [], getGenres: [] ,startDate: moment(),rating: 3}
  
          this.handleDateChange = this.handleDateChange.bind(this);
          this.changeRating = this.changeRating.bind(this);
      }

 
      changeRating( newRating ) {
        this.setState({
          rating: newRating
        });
      }

      handleDateChange(date) {
        this.setState({
          startDate: date
        });
      }

 
      handleNameChange()
      {

      }

      componentWillMount  () {
 
        let $this = this;
 
axios.get('/AllGenres').then(responce=>{
console.log(responce);
$this.setState({getGenres:responce.data})}).catch(error=>{  consol.log(error)   })
    
axios.get('/countries').then(responce=>{
console.log(responce);
$this.setState({countries:responce.data})}).catch(error=>{  consol.log(error)   })    
  
    
    }

      handleChange(event){
        console.log(event.target.value)
      }
     
      ConvertToSlug(){
        //  
      }

    render() {
        setTimeout(() => {
            jQuery('.selectpicker').selectpicker('refresh');
          }, 500);
        $('.selectpicker').selectpicker('refresh');
        return (
            <div> 
           // {JSON.stringify(this.state)}
            <div className=" " id="stepicons">
                  
            
<div className="form-group"><label className="sr-only" htmlFor="name">Name</label>
<input type="text" name="name" placeholder="Film name..." className="f1-first-name form-control"  onChange={this.handleNameChange.bind(this)} id="name"  />
</div>  
            
<div className="form-group">
<label className="sr-only" htmlFor="description">Description</label>
<textarea rows="4" cols="50" name="description"  placeholder="  Description.." ></textarea>
</div>           
            
<div className="form-group">
<label className="sr-only" htmlFor="description">Description</label>
 <DatePicker selected={this.state.startDate}onChange={this.handleDateChange} />
</div>     
 
<div className="form-group"><label className="sr-only" htmlFor="ticket_price">ticket_price</label>
<input type="number" name="ticket_price" placeholder="Ticket price..." className="f1-first-name form-control"  onChange={this.handleNameChange.bind(this)} id="name"  />
</div> 
 
<div className="form-group"><label className="sr-only" htmlFor="ticket_price">ticket_price</label>
<StarRatings
rating={this.state.rating}
starRatedColor="orange"
changeRating={this.changeRating}
numberOfStars={5}
starDimension='20px'
starSpacing='20px'
/>
</div> 

<div className="form-group row"><label className="sr-only" htmlFor="Genres">Genres</label>
        <select className="selectpicker"  data-dropup-auto="false" multiple  data-actions-box="true" data-live-search="true"   id="Genres">
        {this.state.getGenres.map((e, key) => {
        return <option key={key} value={e.id}>{e.title}</option>;
        })}</select>
</div>
         
            
<div className="form-group row"><label className="sr-only" htmlFor="Genres">Genres</label>
        <select className="selectpicker"  data-dropup-auto="false"   data-actions-box="true" data-live-search="true"   id="Genres">
        {this.state.countries.map((e, key) => {
        return <option key={key} value={e.id}>{e.name}</option>;
        })}</select>
</div>             
            </div>


 
             </div>
        );
    }
}

if (document.getElementById('AddFilm')) {
    ReactDOM.render(<AddFilm />, document.getElementById('AddFilm'));
}
