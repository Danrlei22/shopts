import { BrowserRouter } from "react-router-dom";
import SimpleNavBar from "./SimpleNavBar";
import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");

  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

const renderSimpleNavBar = () => {
  render(
    <BrowserRouter>
      <SimpleNavBar />
    </BrowserRouter>,
  );
};

test("return to the previous page by clicking the button", async () => {
  renderSimpleNavBar();

  const button = screen.getByRole("button", { name: /arrow-back/i });

  await userEvent.click(button);

  expect(mockNavigate).toHaveBeenCalledWith(-1);
});

