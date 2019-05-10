const initState = {
  projects: [
    { id: "1", title: "help me", content: "blah blah blah" },
    { id: "2", title: "help me 2", content: "blah blah blah" },
    { id: "3", title: "help me 3", content: "blah blah blah" }
  ]
};

const projectReducer = (state = initState, action) => {
  return state;
};

export default projectReducer;
