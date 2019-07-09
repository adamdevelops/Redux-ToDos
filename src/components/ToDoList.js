import React, {Component} from 'react';
import {connect} from 'react-redux';

class ToDoList extends Component {

  renderToDos(){
    return this.props.todos.map((todo) => {
        return(
          <div className='todo_item' key={todo.id}>
            
          </div>
        )
      }
    )
  }


  render(){
    return
  }
}

const mapStateToProps = (state) => {
  return {todos: state.todos}
}

export default connect(mapStateToProps)(ToDoList)
