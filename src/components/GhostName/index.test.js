import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GhostName from "./index";
import { HEADER_TEXT } from "./constants";

test("renders the default ghost name header text", () => {
  render(<GhostName />);
  screen.getByText(HEADER_TEXT.first);
});

test("renders the correct header after user clicks on a first name first letter option", () => {
  render(<GhostName />);
  userEvent.click(screen.getByRole("button", { name: "B" }));
  screen.getByText(HEADER_TEXT.second);
});

test("renders the correct header after user clicks on a first name option", () => {
  render(<GhostName />);
  userEvent.click(screen.getByRole("button", { name: "B" }));
  userEvent.click(screen.getByRole("button", { name: "Barbara" }));
  screen.getByText(HEADER_TEXT.third);
});

test("renders the correct header after user clicks on a last name first letter option", () => {
  render(<GhostName />);
  userEvent.click(screen.getByRole("button", { name: "B" }));
  userEvent.click(screen.getByRole("button", { name: "Barbara" }));
  userEvent.click(screen.getByRole("button", { name: "A" }));
  screen.getByText(HEADER_TEXT.fourth);
});

test("renders the correct header after user clicks on a last name option", () => {
  render(<GhostName />);
  userEvent.click(screen.getByRole("button", { name: "B" }));
  userEvent.click(screen.getByRole("button", { name: "Barbara" }));
  userEvent.click(screen.getByRole("button", { name: "A" }));
  userEvent.click(screen.getByRole("button", { name: "Anderson" }));
  screen.getByText(HEADER_TEXT.fifth);
});

test("renders the correct header after user clicks reset", () => {
  render(<GhostName />);
  userEvent.click(screen.getByRole("button", { name: "B" }));
  userEvent.click(screen.getByRole("button", { name: "Barbara" }));
  userEvent.click(screen.getByRole("button", { name: "A" }));
  userEvent.click(screen.getByRole("button", { name: "Anderson" }));
  userEvent.click(screen.getByRole("button", { name: "backspace" }));
  screen.getByText(HEADER_TEXT.first);
});