import React from 'react';
import { connect } from 'react-redux';

import {toggle}  from '../actions';

class Todo extends React.Component {
    
    handleChanges = () => {
        console.log('in handle changes');
        this.props.toggle(this.props.index);
    }
    render() {
        return (
            <div> 
                <input onClick = {this.handleChanges} type = 'checkbox'></input>  
                <h2>{this.props.todo}</h2>
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
  )(Todo);
  