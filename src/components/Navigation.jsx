import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_SCREEN_MODE } from "../redux/types";

const Navigation = () => {
  const dispatch = useDispatch();
  const screenMode = useSelector((state) => state.screenMode);

  return (
    <nav>
      {screenMode !== 2 && (
        <button onClick={() => dispatch({ type: SET_SCREEN_MODE, payload: 2 })}>
          Contacts
        </button>
      )}

      {screenMode !== 3 && (
        <button onClick={() => dispatch({ type: SET_SCREEN_MODE, payload: 3 })}>
          Messaging
        </button>
      )}

      {screenMode !== 4 && (
        <button onClick={() => dispatch({ type: SET_SCREEN_MODE, payload: 4 })}>
          Search
        </button>
      )}
    </nav>
  );
};

export default Navigation;
