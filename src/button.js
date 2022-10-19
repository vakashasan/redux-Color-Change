import { useDispatch } from "react-redux";
import {
  RedColorChange,
  BlueColorChange,
  GreenColorChange
} from "./store/action";

export default function BUTTON() {
  const dispatch = useDispatch();

  const handleRed = () => {
    dispatch(RedColorChange());
  };

  const handleBlue = () => {
    dispatch(BlueColorChange());
  };

  const handleGreen = () => {
    dispatch(GreenColorChange());
  };

  return (
    <div>
      <button className="btn" onClick={handleRed}>
        {" "}
        Red{" "}
      </button>
      <button className="btn" onClick={handleBlue}>
        {" "}
        Blue{" "}
      </button>
      <button className="btn" onClick={handleGreen}>
        {" "}
        Green{" "}
      </button>
      <hr />
    </div>
  );
}
