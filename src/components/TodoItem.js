import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component{
  getStyle = () =>{
    return {
      background: '#744876',
      padding:"10px",
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.status ? 'line-through' : 'none'
    }
  }
/**
  this was just for demo reason.. will climb up the leader and drill the components
  to actually change the state of the component.
  markComplete = (e) =>{
    console.log (this.props)
  }
*/
  render(){
    const {id, title} = this.props.todo;
    return (
      <div style={this.getStyle()}>
      <p>
      <input type='checkbox' onChange={this.props.markComplete.bind(this,id)} /> {" "}
      {title}
      <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>x</button>
      </p>

      </div>
    );
  }
}

TodoItem.propTypes ={
  todo: PropTypes.object.isRequired
}
const btnStyle = {
  background: '#f00',
  color:'#fff',
  border:'none',
  padding: '5px 10px',
  borderRadius: '50%',
  cursor:'pointer',
  float: 'right'
}
export default TodoItem;
