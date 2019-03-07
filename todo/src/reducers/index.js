import {TOGGLE, ADD_TO_DO, addToDo} from '../actions';

const initialState = {
  title: 'To Do List',
  todos: [
    { name: 'Make Food', completed: false },
    { name: 'Eat Food', completed: false }
  ]
};

function reducer(state = initialState, action) {
  console.log(`in reducer with action`, action);
  switch (action.type) {
    case TOGGLE:
      state.todos[action.payload].completed = !state.todos[action.payload].completed
      return state;

    case ADD_TO_DO:
    console.log(`case Add To Do`, action.type);
      const newToDo = {
        name: action.payload,
        completed: false
      };
      return {
        ...state,
        todos: [...state.todos, newToDo]
      };

    // case TOGGLE_MEMBER:
    //   // map through state.members
    //   // if member's id at current iteration matches action.payload
    //   // return new member object - spread in old member object
    //   // toggle member's dragonStatus (immutable)
    //   // else return member untouched
    //   return {
    //     ...state,
    //     members: state.members.map(member => {
    //       if (member.id === action.payload) {
    //         return {
    //           ...member,
    //           dragonStatus: !member.dragonStatus
    //         };
    //       }
    //       return member;
    //     })
    //   };

    default:
      return state;
  }
}

export default reducer;