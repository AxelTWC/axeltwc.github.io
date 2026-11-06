import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("lottie-react", () => () => <div data-testid="lottie-mock" />);

test("renders portfolio hero and research section", () => {
  render(<App />);

  expect(screen.getByRole("heading", { name: /hi, i’m axel/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { level: 2, name: /^new horizons$/i })).toBeInTheDocument();
});
