import { SEND_MESSAGE, addNewMessage } from "../actions/messageActions";

export default (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      if (action.sender === "Me") {
        setTimeout(
          () =>
            store.dispatch(
              addNewMessage(
                Object.keys(store.getState().messageReducer.messages).length +
                  1,
                "ya bot",
                "Robot",
                action.chatId
              )
            ),
          1000
        );
        console.log("should anwer");
      }
  }
  return next(action);
};
