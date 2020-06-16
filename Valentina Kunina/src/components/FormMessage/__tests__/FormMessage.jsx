import "@testing-library/jest-dom";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FormMessage from "../FormMessage";

// let container = null;
// beforeEach(() => {
//   // подготавливаем DOM-элемент, куда будем рендерить
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   // подчищаем после завершения
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

test("call addMessage on Submit with params", () => {
    const addMessage = jest.fn(); //function mock(подделка)
    const screen = render(<FormMessage addNewMessage={addMessage} />);
    const inputAuthor = screen.getByLabelText("author");
    const inputText = screen.getByLabelText("text");

    fireEvent.change(inputAuthor, { target: { value: "author" } });
    fireEvent.change(inputText, { target: { value: "text" } });
    fireEvent.click(screen.getByText("Add message"));

    expect(inputAuthor.value).toBe("");
    expect(inputText.value).toBe("");
    expect(addMessage).toHaveBeenCalledWith({ author: "author", text: "text" });
});

    // query* functions will return the element or null if it cannot be found
    // get* functions will return the element or throw an error if it cannot be found
    // expect(screen.queryByText(testMessage)).toBeNull();

    // the queries can accept a regex to make your selectors more resilient to content tweaks and changes.

    // .toBeInTheDocument() is an assertion that comes from jest-dom
    // otherwise you could use .toBeDefined()
    // expect(screen.getByText(testMessage)).toBeInTheDocument();
