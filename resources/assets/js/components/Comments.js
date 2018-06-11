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
        this.state  = {  
             comment :null,
             MyComments :[],
             show :false,
             film_id :film_id,
            } 
 
  }

      handleCommentChange  (e) 
      { 
        if (e.target.value.length>0 )
        {
            this.setState({ comment: e.target.value }) ; 
            document.getElementById("add").style.display = "block";
        }
    
        else
        {
            document.getElementById("add").style.display = "none";
        } 
      }

      AddComment  () 
      {  
        const formData = new FormData()
        formData.append("comment", this.state.comment);
        formData.append("film_id", this.state.film_id);
        let $this = this;
    // if (true){
        axios.post('/AddComment', formData)  .then(function (response) {
        console.log(response);
        if (response.data == "done"){
            $this.setState({ show: true }) ;
            
            var joined = $this.state.MyComments.concat($this.state.comment);
            $this.setState({ MyComments: joined });
        } }).catch(function (error) { console.log(error); });  
    // }
     

}

 

   
     
 

    render() {
 
 
        return (
            <div> 
    
            <SweetAlert
        show={this.state.show}
        title="Done"
        text="you have enter new comment"
        onConfirm={() => this.setState({ show: false })}
      />
 
                  
      <div className="form-group" >
      <label className="sr-only" htmlFor="description"></label>
      <textarea rows="2" cols="80" name="description"  placeholder="  add comment.." onChange={this.handleCommentChange.bind(this)} id="comment" ></textarea>
      </div>   

      <button id="add" style={{ display: 'none' }} className="btn btn-primary" onClick={this.AddComment.bind(this)}>Add !</button>




      {this.state.MyComments.map((e, key) => {
        return <div className="NewComment">{e}</div> ;
        })}


      
      
         









      
    </div>
        );
    }
}

if (document.getElementById('Comments')) {
    ReactDOM.render(<Comments />, document.getElementById('Comments'));
}
