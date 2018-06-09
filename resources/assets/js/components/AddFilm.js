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
        this.state  = { nameV: false , countries: [], getGenres: [] ,
            startDate: moment(),rating: 3 ,imagesFromUsers: [] }
  
          this.handleDateChange = this.handleDateChange.bind(this);
          this.changeRating = this.changeRating.bind(this);
      }

 

      handleImageChange(e) {
        e.preventDefault();
        var imagesFromUsers = [ ]
        var ins = document.getElementById('image').files.length;
        for (var x = 0; x < ins; x++) {
            let reader = new FileReader();
            let file = e.target.files[x];
            reader.onloadend = () => {
            var joined = this.state.imagesFromUsers.concat(reader.result);
            this.setState({ imagesFromUsers: joined })
            }
            reader.readAsDataURL(file)
        }
            
    
        
        this.setState({ imagesFromUsers: imagesFromUsers,});
     
             let fgff=  imagesFromUsers.map((item,i) =>( 
                <div className="card-body"> {item.i.imagePreviewUrl}</div>
                   
                
        ))  
      }
    
    
     
        uploadHandler  (event)  {
        event.preventDefault()
        
        if (this.state.imagesFromUsers.length<1)
        {
          
            
            alert('upload at least on photo');return false;
        }
    
        const formData = new FormData()
        var ins = document.getElementById('image').files.length;
    for (var x = 0; x < ins; x++) {
        formData.append("image[]", document.getElementById('image').files[x]);
       
    }
    
     
    formData.append("name", this.state.nameData);
    formData.append("email", this.state.emailData);
    formData.append("phone", this.state.phoneData);
    formData.append("category", this.state.categoryData);
    formData.append("tag", this.state.tagData);
     
     
        axios.post('/uploadPhoto', formData)  .then(function (response) {
            console.log(response);
            if (response.data == "done"){
                $("#step3").addClass( "d-none" );
                $("#stepicons").addClass( "d-none" );
                $("#done").removeClass( "d-none" );
            }
    
          })
          .catch(function (error) {
             console.log(error);
          });
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



        const imageStyle = {
            width: '100px',
            marginRight: '20px',
          };
   // console.log(this.state.imagesFromUsers);
        let {imagePreviewUrl} = this.state.imagesFromUsers;
        let $imagePreview = null;
 
        
        if (this.state.imagesFromUsers) {
 
        } else {
          $imagePreview = (<div className="previewText">Please select an Image   Preview</div>);
        }



        return (
            <div> 
           
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


<div id="step3" className="">
<form action="" method="post" encType="multipart/form-data">
    <input type="hidden" name="_token" id="csrf-token" value="{{ Session::token() }}" />
   

   
    <input type="file" accept="image/x-png, image/gif, image/jpeg"  onChange={this.handleImageChange.bind(this)} id="image" name="image[]" multiple/>
 
</form> 
        {this.state.imagesFromUsers.map((item,i) =>( 

 <img style={imageStyle}  src ={ item }  />
)) }
</div>



            </div>


            <div id="preview"></div>
            <div className="imgPreview">
            {$imagePreview}
            
            </div>
             </div>
        );
    }
}

if (document.getElementById('AddFilm')) {
    ReactDOM.render(<AddFilm />, document.getElementById('AddFilm'));
}
