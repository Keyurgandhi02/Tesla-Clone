import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders keyur link", () => {
  render(<App />);
  const linkElement = screen.getByText(/keyur/i);

  expect(linkElement).toBeInTheDocument();
});
