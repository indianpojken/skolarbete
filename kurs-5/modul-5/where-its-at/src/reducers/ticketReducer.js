const initalState = {
  ticket: {},
};

function ticketReducer(state = initalState, action) {
  switch (action.type) {
    case 'ticket/selectTicket':
      return {
        ...state,
        ticket: action.payload,
      };

    default:
      return state;
  }
}

export { ticketReducer };
