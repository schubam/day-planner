const days = (state = [], action) => {
  switch (action.type) {
    case "ADD_WEIGHT":
      return [...state, { id: action.id, value: action.value }];
    default:
      return state;
  }
};

export default days;
