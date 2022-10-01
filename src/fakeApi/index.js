import { generateRandomId } from "../utils";

//define the data structure
export const user = {
  id: 0,
  username: "freddddddd",
  friends: [1, 2, 3],
};

export const allUsers = [
  { id: 1, username: "Sally", image: "" },
  { id: 2, username: "Tom", image: "" },
  { id: 3, username: "Andy", image: "" },
];

export const messages = [
  {
    fromId: 0,
    toId: 1,
    content: "Hi Sally!",
    sendDate: 12345678,
    id: generateRandomId(64),
  },
  {
    fromId: 1,
    toId: 0,
    content: "Hi back to you Fred!",
    sendDate: 23456789,
    id: generateRandomId(64),
  },
  {
    fromId: 0,
    toId: 3,
    content: "Hey Andy",
    sendDate: 12345678,
    id: generateRandomId(64),
  },
  {
    fromId: 3,
    toId: 0,
    content: "Hey back to you Fred!",
    sendDate: 34567821,
    id: generateRandomId(64),
  },
  {
    fromId: 2,
    toId: 3,
    content: "Hi Andy, it's Tom",
    sendDate: 12345678,
    id: generateRandomId(64),
  },
  {
    fromId: 3,
    toId: 2,
    content: "Hiya Tom!",
    sendDate: 12345678,
    id: generateRandomId(64),
  },
  {
    fromId: 2,
    toId: 0,
    content: "Hi Fred!",
    sendDate: 87654321,
    id: generateRandomId(64),
  },
];
