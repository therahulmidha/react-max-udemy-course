import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Greeting } from "./Greeting";

describe("Greeting component tests", () => {
  test("renders Hello World as a text", () => {
    render(<Greeting />);
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good to see you if the button was NOT clicked", () => {
    render(<Greeting />);
    const paragraphElement = screen.getByText("good to see you", {
      exact: false,
    });
    expect(paragraphElement).toBeInTheDocument();
  });

  test("renders 'Changed!' if the button was clicked", () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole("button"); // or byText
    userEvent.click(buttonElement);
    const paragraphElement = screen.getByText("Changed!", { exact: false });
    expect(paragraphElement).toBeInTheDocument();
  });

  test("does not renders 'good to see you' if the button was clicked", () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole("button"); // or byText
    userEvent.click(buttonElement);
    // getByText throws error if not found, queryByText returns null instead
    const paragraphElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(paragraphElement).not.toBeInTheDocument();
  });
});
