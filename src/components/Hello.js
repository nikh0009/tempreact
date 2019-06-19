import React, {Component} from 'react';

class Hello extends Component{
  render(){
    return (
      <h1>Hello {this.props.name}!</h1>
    );
  }
}

export default Hello;
