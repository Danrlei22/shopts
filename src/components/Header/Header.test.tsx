import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import { expect, test } from "vitest";
import "@testing-library/jest-dom";

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
