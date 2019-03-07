
import React from 'react';
import { connect } from 'react-redux';

import { addToDo } from '../actions';

class AddToDo extends React.Component {

    state = {
        newToDo: ''
    };


    addMember = e => {
        e.preventDefault();
        console.log(`In addMember method`);
        this.props.addToDo(this.state.newToDo);
        this.setState({ newToDo: '' });
        console.log(`State is newToDo: ${this.state.newToDo}`);
        
    } //end addMember()

    handleChanges = e => {
        //e.preventDefault();
        this.setState({  newToDo: e.target.value   });
        //console.log(`In handleChanges method, ${e.target.value}`);
    }

    render() {
        return (
            <div>   
                <input
                     type="text"
                     name="newMember"
                     value={this.state.newToDo}
                     onChange={this.handleChanges}
                     placeholder="Add new task"
                /> 

                <button onClick={this.addMember}>Add To Do Task</button>
            </div>
        );
    } //end render

} //end Display class

const mapStateToProps = state => {
    console.log(`in mapSTP, state is : `, state);
    return {
      todos: state.todos
    };
  };
  
  export default connect(mapStateToProps,{ addToDo })(AddToDo);





