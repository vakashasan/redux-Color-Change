const INITIALSTATE = {
  globalcolor: "white"
};

const colorReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case "RED":
      return {
        globalcolor: "RED"
      };
    case "BLUE":
      return {
        globalcolor: "BLUE"
      };
    case "GREEN":
      return {
        globalcolor: "GREEN"
      };
    default:
      return {
        ...state
      };
  }
};

export default colorReducer;
