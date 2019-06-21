import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class Todos extends Component{
  render (){
    return this.props.todoList.map((item)=>(
      <TodoItem key= {item.id} todo={item} markComplete= {this.props.markComplete} delTodo= {this.props.delTodo}/>
    ));
  }

}
Todos.propTypes ={
  todoList: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}
 export default Todos;
