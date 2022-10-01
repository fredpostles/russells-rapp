import React, { useState } from "react";
import Navigation from "./Navigation";
import { useSelector, useDispatch } from "react-redux";
import { generateRandomId } from "../utils";
import Conversation from "./Messaging/Conversation";
import { SEND_MESSAGE } from "../redux/types";

const Messaging = () => {
  // const [foreignUser, setForeignUser] = useState();
  const messages = useSelector((state) => state.messages);
  const user = useSelector((state) => state.user);
  const allUsers = useSelector((state) => state.allUsers);
  const foreignUser = useSelector((state) => state.foreignUser);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const userMessages = messages.filter((message) => {
    if (user.blocked.includes(message.fromId || message.toId)) return;

    return (
      (message.fromId === user.id || message.toId === user.id) &&
      (message.fromId === foreignUser || message.toId === foreignUser)
    );
  });

  const currentContact = allUsers.find((user) => {
    if (foreignUser === user.id) return user.username;
  });

  const onSend = () => {
    value &&
      dispatch({
        type: SEND_MESSAGE,
        payload: {
          id: generateRandomId(64),
          fromId: user.id,
          toId: foreignUser,
          content: value,
          sendDate: Date.now(),
        },
      });
    setValue("");
  };

  return (
    <>
      <h1>Messaging</h1>
      <Navigation />
      {currentContact && <h3>Conversation with {currentContact.username}</h3>}
      {userMessages.map((message) => {
        let direction;
        if (message.fromId === user.id) {
          direction = "right";
        }
        if (message.fromId === foreignUser) {
          direction = "left";
        }
        return (
          <Conversation
            key={generateRandomId(34)}
            message={message}
            direction={direction}
          />
        );
      })}
      <input
        onInput={(e) => {
          setValue(e.target.value);
        }}
        type="text"
        value={value}
      ></input>
      <button onClick={onSend}>Send Message</button>
    </>
  );
};

export default Messaging;
