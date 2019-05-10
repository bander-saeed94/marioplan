export const createProject = (project) => {
  //thunk give us below
  return (dispatch, getState, {getFirestore, getFirebase}) => {
    //make async call
    
    dispatch({type: 'CREATE_PROJECT', project})
  }
}