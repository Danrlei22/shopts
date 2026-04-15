import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { beforeEach, expect, test, vi } from "vitest";
import { store } from "../../store";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import userEvent from "@testing-library/user-event";

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

const renderHeader = () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>,
  );
};

test("Verify dispatch is called when banner is clicked", async () => {
  renderHeader();

  const goToBanner = screen.getByLabelText("index-banner-2");

  await userEvent.click(goToBanner);

  const clickedBanner = screen.getByRole("button", {
    name: /selected-banner/i,
  });

  await userEvent.click(clickedBanner);

  expect(mockDispatch).toHaveBeenCalled();
});
