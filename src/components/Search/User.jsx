import React from "react";
import { useDispatch } from "react-redux";
import { ADD_CONTACT } from "../../redux/types";

const User = ({ result }) => {
  const dispatch = useDispatch();

  return (
    <>
      <h1>{result.userName}</h1>
      <img src={result.image} alt={result.image} />
      <button onClick={() => dispatch({ type: ADD_CONTACT, payload: result })}>
        Add friend
      </button>
    </>
  );
};

export default User;
