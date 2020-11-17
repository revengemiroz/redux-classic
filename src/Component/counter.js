import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Counter(props) {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state);

  return (
    <div>
      this is a counter app
      <br />
      <button
        onClick={() => {
          dispatch({ type: "INC" });
        }}
      >
        +
      </button>
      <br />
      {count}
      <br />
      <button
        onClick={() => {
          dispatch({ type: "DES" });
        }}
      >
        -
      </button>
    </div>
  );
}

export default Counter;
