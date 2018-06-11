import React from 'react'
import ReactDOM from 'react-dom';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

export default class PhotosByFilm extends React.Component{
 
  constructor(){
    super()
    this.state  = { 
      Photos  :[]
  }
  }
 
  componentWillMount  () {
 
    let $this = this;

axios.get('/PhotosByFilm/'+14).then(responce=>{
console.log(responce);
$this.setState({Photos:responce.data})}).catch(error=>{  consol.log(error)   })
  
}
 
  render(){    
    
  //   const images = [
  //     {
  //     original: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/f5/43/a3/day-trip-to-alexandria.jpg',
  //     thumbnail: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/f5/43/a3/day-trip-to-alexandria.jpg',
  //   }
  // ]
    const images = [];

    {this.state.Photos.map((e, key) => {
      return  images.push({"original": '/uploads/'+e.data, "thumbnail" : '/uploads/'+e.data});;
      })}
  
    return  (
 
                <ImageGallery items={images} /> 
   ) 

  }
}


if (document.getElementById('PhotosByFilm')) {
    ReactDOM.render(<PhotosByFilm />, document.getElementById('PhotosByFilm'));
}