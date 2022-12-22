import { render, screen } from "@testing-library/react";
import MemoApp from "./MemoApp";

test("renders header text", () => {
  render(<MemoApp />);
  const linkElement = screen.getByText(/Super Simple Memo App/i);
  expect(linkElement).toBeInTheDocument();
});
