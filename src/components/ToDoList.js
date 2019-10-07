import React, {Component} from 'react';
import { connect } from 'react-redux';
import { deleteTODO, editTODO } from '../actions';



class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);

    };

    onDelete = (event, todo) => {
      this.props.deleteTODO(todo.id);
    }

    onEdit = (event, todo) => {
      this.props.editTODO(todo);
    }

  renderToDos(){
    return this.props.todos.map((todo) => {
        return(
          <div className='todo_item' key={todo.id}>
            <a onClick={(event) => this.onDelete(event, todo)}><li>{todo.description}</li></a>
            <a onClick={(event) => this.onEdit(event, todo)}>Edit</a>
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

export default connect(mapStateToProps, {deleteTODO, editTODO})(ToDoList)
