import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store";
import { test, expect } from "vitest";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

const renderNavBar = () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </Provider>,
  );
};

test("render search input", () => {
  renderNavBar();

  expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
});

test("render search digit", async () => {
  renderNavBar();

  const input = screen.getByPlaceholderText("Search");
  await userEvent.type(input, "nike");

  expect(input).toHaveValue("nike");
});
