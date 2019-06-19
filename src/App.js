import React,{Component} from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
class App extends Component{
  state ={
    todos:[
      {
        id:1,
        title:"Get up!",
        status:false
      },
      {
        id:2,
        title:"Sleep.. Again!",
        status:false
      },
      {
        id:3,
        title:"Get Ready for work...",
        status:false
      }
    ]
  }

  markComplete = (id) =>{
    this.setState({todos : this.state.todos.map(todo =>{
      if (todo.id === id){
        todo.status = !todo.status
      }
      return todo;
    })})
  }

  //Delete todo from the list
  delTodo = (id) =>{
    this.setState ({todos : [...this.state.todos.filter(todo => todo.id !== id)]})
  }


  render(){
    return (
      <div className="App">
        <div className="container" >
          <Header />
          <AddTodo />
          <Todos todoList={this.state.todos} markComplete= {this.markComplete} delTodo= {this.delTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
