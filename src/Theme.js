import React, { Component } from 'react'
import './theme.css'
export default class theme extends Component {
  state={
    button:"",
  }
  input=(event)=>{
         var click=event.target.innerHTML;
         this.setState({
          button:click,
         }) 
        console.log(this.state.button);
         
    }
  render() {
  
  if(this.state.button===""){
    return <div className=' dfault1'>
      <button className='dfault' onClick={this.input}>Light</button>
      <button className='dfault' onClick={this.input}>Dark</button>
      <button className='dfault' onClick={this.input}>Party</button>
    </div>
  }
   else if(this.state.button==="Dark"){
      return <div className='dark1'>
      <button className='dark' onClick={this.input}>Light</button>
      <button className='dark'onClick={this.input}>Dark</button>
      <button className='dark'onClick={this.input}>Party</button>
    </div>
    }
    else if(this.state.button==="Light"){
      return <div className='light1'>
      <button className='light' onClick={this.input}>Light</button>
      <button className='light' onClick={this.input}>Dark</button>
      <button className='light' onClick={this.input}>Party</button>
    </div>
    }
    else if(this.state.button==="Party"){
      return <div className='party1'>
      <button className='party' onClick={this.input}>Light</button>
      <button className='party' onClick={this.input}>Dark</button>
      <button className='party' onClick={this.input}>Party</button>
    </div>
    }
  
  }
}
 

 

