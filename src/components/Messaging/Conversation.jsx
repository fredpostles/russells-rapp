import React from "react";
import Message from "./Message";

const Conversation = ({ message, direction }) => {
  return (
    <>
      <div className="conversation__container">
        <div className={direction}>
          <Message message={message.content} id={message.id} />
        </div>
      </div>
    </>
  );
};

export default Conversation;
