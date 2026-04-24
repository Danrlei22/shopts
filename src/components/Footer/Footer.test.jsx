import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { test } from "vitest";

const renderFooter = () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>,
  );
};

test("renders the link Terms of use", async () => {
  renderFooter();

  const linkTerms = screen.getByRole("link", { name: /Terms of use/i });
  await userEvent.click(linkTerms);
});

test("renders the link Privacy Policy", async () => {
  renderFooter();

  const linkPrivacy = screen.getByRole("link", { name: /Privacy Policy/i });
  await userEvent.click(linkPrivacy);
});
test("renders the link Help", async () => {
  renderFooter();

  const linkHelp = screen.getByRole("link", { name: /Help/i });
  await userEvent.click(linkHelp);
});
