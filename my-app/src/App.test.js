import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("lottie-react", () => () => <div data-testid="lottie-mock" />);

test("renders the requested profile and UMPLE project without removed sections", () => {
  render(<App />);

  expect(screen.getByRole("heading", { name: /learn about axel/i })).toBeInTheDocument();
  expect(screen.getByText(/master of engineering student in artificial intelligence at the university of toronto/i)).toBeInTheDocument();
  expect(screen.getByText(/created a minecraft community server at 14/i)).toBeInTheDocument();
  expect(screen.getAllByText(/developing an ai kiosk to answer customer questions/i)).toHaveLength(2);
  expect(screen.getByRole("heading", { name: "UMPLE Contributions" })).toBeInTheDocument();
  expect(screen.queryByRole("heading", { name: "Personal Statement" })).not.toBeInTheDocument();
  expect(screen.queryByRole("heading", { name: "AI Insight" })).not.toBeInTheDocument();
  expect(screen.queryByRole("heading", { name: /research/i })).not.toBeInTheDocument();
  expect(screen.queryByRole("heading", { name: "HumblexMC" })).not.toBeInTheDocument();
  expect(screen.queryByRole("link", { name: "Resume" })).not.toBeInTheDocument();
  expect(screen.queryByRole("heading", { name: "Resume" })).not.toBeInTheDocument();
});
