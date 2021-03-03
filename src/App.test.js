import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const headerElement = screen.getByText(/phasmophobia evidence matrix/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders six evidence categories', () => {
  render(<App />);
  const evidenceSection = screen.getByTestId('test-evidence');
  expect(evidenceSection.children.length).toEqual(6);
})

test('renders twelve ghost types', () => {
  render(<App />);
  const ghostsSection = screen.getByTestId('test-ghosts');
  expect(ghostsSection.children.length).toEqual(12);
})