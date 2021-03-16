import { getByLabelText, render, screen } from "@testing-library/react";
import App from "./App";
import { HEADER_TEXT as GHOST_NAME_HEADER_TEXT } from "./components/GhostName/constants";

test("renders the app title", () => {
  render(<App />);
  const headerElement = screen.getByText(/phasmophobia evidence matrix/i);
  expect(headerElement).toBeInTheDocument();
});
