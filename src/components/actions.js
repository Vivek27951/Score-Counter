export const increment = (steps) => {
  return {
    type: "INC",
    payload: steps,
  };
};
export const decrement = () => {
  return {
    type: "DEC",
  };
};
