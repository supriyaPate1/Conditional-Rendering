import React, { Component } from 'react'
import './input.css'
export default class Input extends Component {
    data=[
        
        "Sharad",
        "Neha",
        "Neeraj",
        "naina",
        "Shivanshi",
        "Swati",
        "Ankit",
        "Anubahv",
        "Saurabh",
        "Rahul",
        "Ram",
        "Jagriti",
        "jaggu",
        "james"

    ]
    state={
        text:"",
    }
    searchData=(event)=>{
        this.setState({
          
            text:event.target.value.toUpperCase(),
        })
        
      }
  render() {
    return (
      <div className='inp'>
        <input placeholder='type to search' onChange={this.searchData}/>
        <div>
       
          {
         
             this.data.map(
              (val)=>{
                let vall=val.toUpperCase()
                if(this.state.text!==""){
                  return (vall.startsWith(this.state.text)) ? <p>{val}</p> : null}
                }
               
              
            )
          }
         
         
        </div>
      </div>
    )
  }
}

