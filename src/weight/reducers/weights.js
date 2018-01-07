let DATA = [];
for (let i = 0; i < 2; i++) {
  DATA.push({
    week: i,
    label: `Week ${i + 1} (XX.XX.2018 - XX.XX.2018)`,
    monday: 123.9,
    tuesday: 123.8,
    wednesday: 123.7,
    thursday: 123.6,
    friday: 123.5,
    saturday: 123.4,
    sunday: 123.3
  });
}

const weights = (state = DATA, action) => {
  switch (action.type) {
    case "ADD_WEIGHT":
      return [...state, { id: action.id, value: action.value }];
    default:
      return state;
  }
};

export default weights;
