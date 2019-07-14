import React, {Component} from 'react';
import {connect} from 'react-redux';
import ToDoInput from './ToDoInput';


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
    console.log(this.props);
    return (
      <div>
        <div>ToDoList</div>
        <ToDoInput props={this.props} />
        <div>{this.renderToDos()}</div>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {todos: state.todos}
}

export default connect(mapStateToProps)(ToDoList)
