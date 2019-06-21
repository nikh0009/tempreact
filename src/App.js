import React,{Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid';
class App extends Component{
  state ={
    todos:[
      {
        id:uuid.v4(),
        title:"Get up!",
        status:false
      },
      {
        id:uuid.v4(),
        title:"Sleep.. Again!",
        status:false
      },
      {
        id:uuid.v4(),
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

  //AddTodo function
  addTodo = (title) =>{
    const newTodo = {
      id:uuid.v4(),
      title,
      status: false
    }
    this.setState({
      todos: [...this.state.todos,newTodo]
    })
  }


  render(){
    return (
      <Router>
      <div className="App">
        <div className="container" >
          <Header />
          <Route exact path='/' render= {props => (
              <React.Fragment>
                <AddTodo addTodo= {this.addTodo} />
                <Todos todoList={this.state.todos} markComplete= {this.markComplete} delTodo= {this.delTodo}/>
              </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
