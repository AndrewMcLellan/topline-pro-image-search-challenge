import { render, screen } from '@testing-library/react';
import SearchBarInput from './SearchBarInput';

test('renders an input and a button', () => {
  render(<SearchBarInput />);
  const element = screen.getByTestId('test-search-input');
  const button = screen.getByTestId('test-search-button');

  expect(element).toBeInTheDocument();
  expect(button).toBeInTheDocument();
})

