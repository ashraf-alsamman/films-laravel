import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Slug from 'react-slug';

export default class Example extends Component {

    constructor(){
        super()
        this.handleChange = this.handleChange.bind(this)
      }
     
      handleChange(event){
        console.log(event.target.value)
      }
     

    render() {
        return (
            <div> 
                        <Slug value="this will be stringified" onChange={this.handleChange} />
  
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
