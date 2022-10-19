const RedColorChange = () => {
  return (dispatch) => {
    dispatch({
      type: "RED"
    });
  };
};

const BlueColorChange = () => {
  return (dispatch) => {
    dispatch({
      type: "BLUE"
    });
  };
};

const GreenColorChange = () => {
  return (dispatch) => {
    dispatch({
      type: "GREEN"
    });
  };
};

export { RedColorChange, BlueColorChange, GreenColorChange };
