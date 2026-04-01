import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../store";
import { test, expect } from "vitest";
import "@testing-library/jest-dom";

test("render input search", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </Provider>,
  );

  const input = screen.getByPlaceholderText("Search");

  expect(input).toBeInTheDocument();
});
