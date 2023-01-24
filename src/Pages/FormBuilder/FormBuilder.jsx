import $ from "jquery"; //Load jquery
import React, { Component, createRef, useEffect } from "react"; //For react component
import ReactDOM from "react-dom";

window.jQuery = $; //JQuery alias
window.$ = $; //JQuery alias

require("jquery-ui-sortable"); //For FormBuilder Element Drag and Drop
require("formBuilder");// For FormBuilder

const formData = [];
  
  document.body.style.margin = "30px"; //For add margin in HTML body
  
  //Initialize formBuilder 
  class FormBuilder1 extends Component {
    fb = createRef();
    componentDidMount() {
      $(this.fb.current).formBuilder({ formData });
    }
  
    render() {
      return <div id="fb-editor" ref={this.fb} />;
    }
  }


   



const FormBuilder = () => {
    useEffect(() => {
      console.log(formData)
    
     
    }, [formData])
    
  return (
   <div>
       <FormBuilder1 />
   </div>
       
   
  )
}

export default FormBuilder