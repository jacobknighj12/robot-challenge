import { render, screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import App from './App';


test('renders Place button to screen', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Place/i);
  expect(buttonElement).toBeInTheDocument();
});
test('renders Move button to screen', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Move/i);
  expect(buttonElement).toBeInTheDocument();
});
test('renders Left button to screen', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Left/i);
  expect(buttonElement).toBeInTheDocument();
});
test('renders Right button to screen', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Right/i);
  expect(buttonElement).toBeInTheDocument();
});
test('renders Report button to screen', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Report/i);
  expect(buttonElement).toBeInTheDocument();
});
test('renders Report button to screen', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Report/i);
  expect(buttonElement).toBeInTheDocument();
});
