const initialState = [
  {
    date: "2018-01-07",
    weight: 117.5
  },
  {
    date: "2018-01-08",
    weight: 117.34
  },
  {
    date: "2018-01-09",
    weight: 117.4
  },
  {
    date: "2018-08-20",
    weight: 107.4
  }
];

const weights = (state = initialState, action) => {
  switch (action.type) {
    case "WEIGHT_CHANGED":
      return state.map(item => {
        if (item.date !== action.date) {
          return item;
        }

        return {
          ...item,
          weight: action.weight
        };
      });
    case "WEIGHT_ADDED":
      return [
        ...state,
        {
          date: action.date,
          weight: action.weight
        }
      ];
    default:
      return state;
  }
};

export default weights;
