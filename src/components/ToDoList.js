import React, {Component} from 'react';
import { connect } from 'react-redux';
import { deleteTODO, editTODO } from '../actions';
import '../styles.css';


class ToDoList extends Component {
  constructor(props) {
    super(props);
    
    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.openEdit = this.openEdit.bind(this);

    };

      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }

    onDelete = (event, todo) => {
      this.props.deleteTODO(todo.id);
    }

    openEdit = event => {
      document.getElementById('editForm').className="show";
    }

    onEdit = (event, todo) => {
      event.preventDefault();
      console.log(todo.description);
      const value = this.input.value;
      todo.description = value;
      this.props.editTODO(todo);
      document.getElementById('editForm').className="hide";
    }





  renderToDos(){
    return this.props.todos.map((todo) => {
        return(
          <div className='todo_item' key={todo.id}>
            <a onClick={(event) => this.onDelete(event, todo)}><li>{todo.description}</li></a>
            <a onClick={this.openEdit} className="show" id="editButton">Edit</a>
            <form className="hide" id='editForm' onSubmit={(event) => this.onEdit(event, todo)}>
              <input type="text" id="textInput" placeholder="Enter a new item." ref={node => this.input = node} />
              <button type="submit" id="todoSubmitBtn" value="Save"> Save </button>
            </form>
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
