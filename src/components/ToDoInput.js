import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addTODO } from '../actions'


class ToDoInput extends Component {

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    };

  onSubmit = (event) => {
    event.preventDefault();
    alert(event.target.value);
    console.log(event.target.value);
    this.props.addTODO(event.target.value)
  }

  onChange = (event) => {
    alert(event.target.value);
    console.log(event.target.value);
    this.props.addTODO(event.target.value);
    event.preventDefault();
  }

  render(){

    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text"  placeholder="Add ToDo" />
          <button type="submit" value="Add"> Add Todo</button>
        </form>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {todos: state.todos}
}

export default connect(mapStateToProps, {addTODO})(ToDoInput);
