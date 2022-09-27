import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { BLOCK_CONTACT } from "../../redux/types";

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

  return (
    <>
      <h1>{result.userName}</h1>
      <img src={result.image} alt={result.userName} />
      <button onClick={onBlock}>{blockClick ? "Confirm" : "Block"}</button>
    </>
  );
};

export default Contact;
