const initialState = [
  {
    date: "2018-01-07",
    weight: 117.5,
    week: 1
  },
  {
    date: "2018-01-08",
    weight: 117.34,
    week: 2
  },
  {
    date: "2018-01-09",
    weight: 117.4,
    week: 2
  },
  {
    date: "2018-08-20",
    weight: 107.4,
    week: 34
  }
];

const weights = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_WEIGHT":
      return [...state, { id: action.id, value: action.value }];
    default:
      return state;
  }
};

export default weights;
