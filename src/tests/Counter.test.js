import { render, screen } from "@testing-library/react";
import Counter from "../components/Counter";
import { act } from "react-dom/test-utils";

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const conterMessage = screen.getByText(/Counter/i);
  expect(conterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const countValue = screen.getByText(/0/);
  expect(countValue).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const incrementButton = screen.getByText("+");

  act(() => {
    incrementButton.click();
  });

  const countValue = screen.getByText(/1/);
  expect(countValue).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const decrementButton = screen.getByText("-");

  act(() => {
    decrementButton.click();
  });

  const countValue = screen.getByText(/-1/);
  expect(countValue).toBeInTheDocument();
});
