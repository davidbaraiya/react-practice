const reducer = (state, action) => {
  console.log(state);

  switch (action.type) {
    case "INCR":
      return { count: state.count + 1 };

    case "DECR":
      return state.count > 0 ? { count: state.count - 1 } : state;

    default: {
      throw new Error("Unknown action type");
    }
  }
};

export default reducer;
