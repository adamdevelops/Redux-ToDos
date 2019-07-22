import React, {Component} from 'react';
import {connect} from 'react-redux';


class ToDoList extends Component {

  renderToDos(){
    return this.props.todos.map((todo) => {
        return(
          <div className='todo_item' key={todo.id}>
            <li>{todo.description}</li>
          </div>
        )
      }
    )
  }


  render(){
    return (
      <div>
        <div>ToDoList</div>
        <div>{this.renderToDos()}</div>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  console.log('state in TodoList')
  console.log(state)
  return {todos: state.todos}
}

export default connect(mapStateToProps)(ToDoList)
