import React from 'react';
import { connect } from 'react-redux';

import {toggle}  from '../actions';
import Todo from './todo';

class Display extends React.Component {
    
    handleChanges = i => {
        console.log('in handle changes with e = ', i);
        this.props.toggle(i);
    }
    render() {
        return (
            <div>   
                <h1>{this.props.title}</h1>
                {this.props.todos.map( (todo, i) => <Todo  todo = {todo.name} index = {i} />) }
            </div>
        );
    } //end render

} //end Display class

const mapStateToProps = state => {
    console.log(state);
    return {
      title: state.title,
      todos: state.todos
    };
  };
  
  export default connect(
    mapStateToProps,
    { toggle } // same as { updateTitle: updateTitle }
  )(Display);
  