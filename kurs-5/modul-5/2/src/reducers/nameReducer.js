const initalState = {
  name: '',
};

function nameReducer(state = initalState, action) {
  switch (action.type) {
    case 'name/set':
      return {
        ...state,
        name: action.payload,
      };

    default:
      return state;
  }
}

export { nameReducer };
