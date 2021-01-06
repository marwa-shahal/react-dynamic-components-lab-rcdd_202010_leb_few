import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    return (
      <div className="color-box" style={{opacity:this.props.opacity} /*replace null with the value*/}}>
        {/* your conditional code here! */}
        {opacity >= 0.2 ? <ColorBox opacity={this.props.opacity-1} /> : null }
      </div>
    )
  }

}

