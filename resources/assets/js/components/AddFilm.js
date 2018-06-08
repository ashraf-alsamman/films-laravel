import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Slug from 'react-slug';





import SelectPicker from "react-select-picker";





export default class AddFilm extends Component {

    constructor(){
        super()
        this.state  = { nameV: false , getGenres: [] }

      }
     

      componentWillMount  () {
 
        let $this = this;
 
      axios.get('/AllGenres').then(responce=>{
     console.log(responce);
          $this.setState({getGenres:responce.data})
 
      }).catch(error=>{
          consol.log(error) 
      })
    
  
    
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
            {JSON.stringify(this.state)}


            <select className="selectpicker"  data-dropup-auto="false" multiple  data-actions-box="true" data-live-search="true"   id="tag">
            {this.state.getGenres.map((e, key) => {
    return <option key={key} value={e.id}>{e.title}</option>;
    })}
</select>
 
             </div>
        );
    }
}

if (document.getElementById('AddFilm')) {
    ReactDOM.render(<AddFilm />, document.getElementById('AddFilm'));
}
