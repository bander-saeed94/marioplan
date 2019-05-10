export const createProject = (project) => {
  //thunk give us below
  return (dispatch, getState, {getFirestore, getFirebase}) => {
    //make async call
    const firestore = getFirestore();
    firestore.collection('projects').add({
      ...project,
      authorFirstName: 'Net',
      auhtorLastName: 'Ninja',
      authorId: 1,
      createdAt: new Date()
    }).then( () => {
      dispatch({type: 'CREATE_PROJECT', project})
    }).catch(error => {
      dispatch({type: 'CREATE_PROJECT_ERROR', error})
    })
  }
}