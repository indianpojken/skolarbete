function selectTicket(ticket) {
  return {
    type: 'ticket/selectTicket',
    payload: ticket,
  };
}

export { selectTicket };
