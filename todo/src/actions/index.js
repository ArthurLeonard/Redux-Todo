export const TOGGLE = 'TOGGLE';
export const ADD_TO_DO = 'ADD_TO_DO';

export const toggle = index => {
//   console.log('in uhandlChanges action', e);
  return {
    type: TOGGLE,
    payload: index
  };
}


export const addToDo = memberName => {
    
  return {
    type: ADD_TO_DO,
    payload: memberName
  };
};