import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Slug from 'react-slug';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import 'sweetalert/dist/sweetalert.css';
import SelectPicker from "react-select-picker";
import StarRatings from 'react-star-ratings';
import SweetAlert from 'sweetalert-react';

export default class Comments extends Component {

    constructor(){
        super()
        this.state  = {  commentV: false,
             comment :null,
             MyComments :[],
            } 
 
  }

      handleCommentChange  (e) 
      { 
        if (e.target.value.length>0 )
        {
            document.getElementById("add").style.display = "block";
        }
    
        else
        {
            document.getElementById("add").style.display = "none";
        } 
      }

      AddComment  () 
      {  
        formData.append("comment", this.state.comment);
  
    
    
    if (this.state.nameV && this.state.descriptionV && this.state.TicketPriceV && this.state.CountryIdV){
        axios.post('/SaveFilm', formData)  .then(function (response) {
        console.log(response);
        if (response.data == "done"){  } }).catch(function (error) { console.log(error); });  
    }
     

}

 

   
     
 

    render() {
 
 
        return (
            <div> 
            <SweetAlert
        show={this.state.show}
        title="error"
        text="upload at least one image"
        onConfirm={() => this.setState({ show: false })}
      />
 
                  
      <div className="form-group" >
      <label className="sr-only" htmlFor="description"></label>
      <textarea rows="2" cols="80" name="description"  placeholder="  add comment.." onChange={this.handleCommentChange.bind(this)} id="comment" ></textarea>
      </div>   

      <button id="add" style={{ display: 'none' }} className="btn btn-primary" onClick={this.AddComment.bind(this)}>Add !</button>

    </div>
        );
    }
}

if (document.getElementById('Comments')) {
    ReactDOM.render(<Comments />, document.getElementById('Comments'));
}
