const initialState = {
};

export const app = (state = initialState, action) => {
  switch (action.type) {
    case "INIT":
      return {
        ...state,
      };
    default:
      return state;
  }
};

