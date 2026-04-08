import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import { expect, test } from "vitest";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

const renderHeader = () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>,
  );
};

test("The correct initial banner is being displayed", () => {
  renderHeader();

  expect(screen.getByAltText(/welcome Shopts/i)).toBeInTheDocument();
});

test("Navigates to previous banner on prev button click", async () => {
  renderHeader();

  const prevButton = screen.getByRole("button", { name: /btn-prev/i });

  await userEvent.click(prevButton);
});
