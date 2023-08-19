import React, { Component } from 'react'

export default class BGcolor extends Component {
  render() {
    const even={
          backgroundColor:"red",
          color:"white",
          width:"100%",
          margin:"auto",
          height:"40vh",
          textAlign:"center",
          marginTop:"20px"
    }
    const odd={
        backgroundColor:"yellow",
        color:"white",
        width:"80%",
        margin:"auto",
        height:"40vh",
        textAlign:"center"
  }
    return (
        <>
      {(this.props.num%2===0)?<div style={even}>EVEN</div>:<div style={odd}>ODD</div>}
      </>
    )
  }
}
