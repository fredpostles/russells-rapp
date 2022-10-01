import React from "react";
import { useDispatch } from "react-redux";
import { DELETE_MESSAGE } from "../../redux/types";

const Message = ({ message, id }) => {
  const dispatch = useDispatch();
  return (
    <>
      <p>{message}</p>
      <button onClick={() => dispatch({ type: DELETE_MESSAGE, payload: id })}>
        Delete message
      </button>
    </>
  );
};

export default Message;
