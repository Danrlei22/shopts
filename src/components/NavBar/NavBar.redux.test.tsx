import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, test, vi, expect } from "vitest";
import { store } from "../../store";
import NavBar from "./NavBar";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

const mockDispatch = vi.fn();

beforeEach(() => {
  mockDispatch.mockClear();
});

vi.mock("react-redux", async () => {
  const actual = await vi.importActual("react-redux");

  return {
    ...actual,
    useDispatch: () => mockDispatch,
  };
});

const renderNavBar = () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </Provider>,
  );
};

test("Actions should be triggered when a search with a value is sent", async () => {
  renderNavBar();

  const input = screen.getByPlaceholderText("Search");

  fireEvent.change(input, { target: { value: "nike" } });

  const button = screen.getByRole("button", { name: /search/i });

  await userEvent.click(button);

  expect(mockDispatch).toHaveBeenCalledTimes(1);
});
