function set(name) {
  return {
    type: 'name/set',
    payload: name,
  };
}

export { set };
