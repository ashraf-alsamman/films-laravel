import React from 'react'
import Slug from 'react-slug'
import ReactDOM from 'react-dom';

export default class FilmSlug extends React.Component{
 
  constructor(){
    super()
    this.handleChange = this.handleChange.bind(this)
  }
 
  handleChange(event){
    console.log(event.target.value)
  }
 
  render(){
    return <Slug value="this will be stringified" onChange={this.handleChange} className="test" />
  }
}


if (document.getElementById('FilmSlug')) {
    ReactDOM.render(<FilmSlug />, document.getElementById('FilmSlug'));
}