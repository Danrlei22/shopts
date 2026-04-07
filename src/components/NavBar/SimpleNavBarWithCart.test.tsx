import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SimpleNavBarWithCart from "./SimpleNavBarWithCart";
import { expect, test } from "vitest";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { store } from "../../store";

const renderSimplenavbarWithCart = () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <SimpleNavBarWithCart />
      </BrowserRouter>
    </Provider>,
  );
};

test("render cart icon", () => {
  renderSimplenavbarWithCart();

  expect(screen.getByRole("button", { name: /cart/i })).toBeInTheDocument();
});
