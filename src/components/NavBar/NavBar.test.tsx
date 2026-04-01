import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store";
import { test, expect } from "vitest";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

test("render input search", async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </Provider>,
  );

  const input = screen.getByPlaceholderText("Search");

  await userEvent.type(input, "nike");

  //expect(input).toBeInTheDocument();
  expect(input).toHaveValue("nike");
});
