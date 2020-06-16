import update from "react-addons-update";
import { handleActions } from "redux-actions";
import { SEND_MESSAGE } from "../actions/messageActions";

const initialState = {
  messages: {
    1: { text: "Hello!", author: "Robot" },
    2: { text: "How do you do?", author: "Robot" },
  },
};

const messageReducers = handleActions(
  {
    [SEND_MESSAGE]: (state, action) => {
      console.log("im send msgreducer");
      return update(state, {
        messages: {
          $merge: {
            [action.messageId]: {
              text: action.text,
              author: action.sender,
            },
          },
        },
      });
    },
  },
  initialState
);

export default messageReducers;
