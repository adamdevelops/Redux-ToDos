import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addTODO } from '../actions';


class ToDoInput extends Component {

  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);


    };

  // const preventRefresh = {event => {
  //   event.preventDefault()
  // }}
  //
  onSubmit = (event) => {
    event.preventDefault();  //prevent screen refresh
    const value = this.input.value;
    alert(value);
    console.log(value);
    this.props.addTODO(value);
  }


  renderInputForm(){
    return(
        <form onSubmit = {this.onSubmit}>
          <input type="text"  placeholder="Add ToDo" ref={node => this.input = node} />
          <button type="submit" value="Add"> Add Todo</button>
        </form>

    );
  }

  render(){
    console.log('props');
    console.log(this.props);
    return <div>
      {this.renderInputForm()}
    </div>;
  }
}

const mapStateToProps = (state) => {
  return {todos: state.todos}
}

export default connect(mapStateToProps, {addTODO})(ToDoInput);
