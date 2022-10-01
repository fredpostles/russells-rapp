import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  BLOCK_CONTACT,
  SET_FOREIGN_USER,
  SET_SCREEN_MODE,
} from "../../redux/types";

const Contact = ({ result }) => {
  const dispatch = useDispatch();
  const [blockClick, setBlockClick] = useState(false);

  const onBlock = () => {
    if (blockClick) {
      dispatch({ type: BLOCK_CONTACT, payload: result.id });
    } else {
      setTimeout(() => {
        setBlockClick(true);
      }, 1000);
    }
  };

  const onOpenChat = () => {
    dispatch({ type: SET_SCREEN_MODE, payload: 3 });
    dispatch({ type: SET_FOREIGN_USER, payload: result.id });
  };

  return (
    <>
      <h1>{result.username}</h1>
      <img src={result.image} alt={result.username} />
      <button onClick={onBlock}>{blockClick ? "Confirm" : "Block"}</button>
      <button onClick={onOpenChat}>Chat with {result.username}</button>
    </>
  );
};

export default Contact;
