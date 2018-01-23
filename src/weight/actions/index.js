export const weightChanged = (date, weight) => {
  const action = {
    type: "WEIGHT_CHANGED",
    date,
    weight: parseFloat(weight)
  };
  console.log(action);
  return action;
};

export const weightAdded = (date, weight) => {
  const action = {
    type: "WEIGHT_ADDED",
    date,
    weight: parseFloat(weight)
  };
  console.log(action);
  return action;
};
