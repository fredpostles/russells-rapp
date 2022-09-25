import React from "react";
import { useDispatch } from "react-redux";
import { BLOCK_CONTACT } from "../../redux/types";

const Contact = ({ result }) => {
  const dispatch = useDispatch();

  return (
    <>
      <h1>{result.userName}</h1>
      <img src={result.image} alt={result.userName} />
      <button
        onClick={() => dispatch({ type: BLOCK_CONTACT, payload: result.id })}
      >
        Block
      </button>
    </>
  );
};

export default Contact;
