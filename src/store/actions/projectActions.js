export const createProject = (project) => {
  //thunk give us below
  return (dispatch, getState, {getFirestore, getFirebase}) => {
    //make async call
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    firestore.collection('projects').add({
      ...project,
      authorFirstName: profile.firstName,
      auhtorLastName: profile.lastName,
      authorId,
      createdAt: new Date()
    }).then( () => {
      dispatch({type: 'CREATE_PROJECT', project})
    }).catch(error => {
      dispatch({type: 'CREATE_PROJECT_ERROR', error})
    })
  }
}