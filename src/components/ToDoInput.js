import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addTODO } from '../actions'


class ToDoInput extends Component {

  // constructor(props) {
  //   super(props);
  //
  //   this.onChange = this.onChange.bind(this);
  //   this.onSubmit = this.onSubmit.bind(this);
  //
  //   };

  // onSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(event.target.value);
  //   this.addTODO("add new todo");
  // }
  //
  // onChange = (event) => {
  //   alert(event.target.value);
  //   console.log(event.target.value);
  //   this.props.addTODO(event.target.value);
  //   event.preventDefault();
  // }

  renderInputForm(){
    const newtodo = "add new todo";
    return(
        <form>
          <input type="text"  placeholder="Add ToDo" />
          <button type="submit" value="Add" onClick={() => this.props.addTODO()}> Add Todo</button>
        </form>
    );
  }

  render(){
    console.log('props');
    console.log(this.props);
    return <div> {this.renderInputForm()} </div>;
  }
}

const mapStateToProps = (state) => {
  return {todos: state.todos}
}

export default connect(mapStateToProps, {addTODO})(ToDoInput);
