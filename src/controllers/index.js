import axios from "axios";
import { store } from "../redux/store";
import { allUsers, user, messages } from "../fakeApi/index";
import {
  SET_ALL_USERS,
  SET_CURRENT_USER,
  SET_USER_MESSAGES,
} from "../redux/types";

export class DataController {
  activity = { lastCheck: Date.now(), updateFound: false, currentOption: 0 };
  options = [1, 5, 10, 30, 60, 180, 320, 1000];

  init = () => {
    this.getAllUsers();
    this.getUserMessages();

    // start polling
    this.poll();
  };

  poll = () => {
    setTimeout(() => {
      this.getAllUsers();
      this.getUserMessages();
      this.poll();
    }, this.options[this.activity.currentOption] * 1000);
  };

  getAllUsers = async () => {
    // const result = await axios.get("...")
    const result = allUsers; // locally; to be replace with API data
    const state = store.getState();

    const { currentOption: cO } = this.activity;

    if (JSON.stringify(state.allUsers) === JSON.stringify(result)) {
      console.log("SAME");
      // if data is same as last time
      this.activity.currentOption = cO < this.options.length - 1 ? cO + 1 : cO;
    } else {
      console.log("DIFFERENT");
      this.activity.currentOption = cO > 0 ? cO - 1 : cO;
    }

    store.dispatch({ type: SET_ALL_USERS, payload: result });
  };

  getCurrentUser = async () => {
    const result = user;

    store.dispatch({ type: SET_CURRENT_USER, payload: result });
  };

  getUserMessages = async () => {
    const result = messages;

    store.dispatch({ type: SET_USER_MESSAGES, payload: result });
  };
}
