import { render, screen } from '@testing-library/react';
import App from './App';

// test (description, testing code)
test('renders learn react link', () => {
  // arrange (setup the test data, conditions, envt.)
  render(<App />);

  // act (run the logic to be tested)
  const linkElement = screen.getByText(/learn react/i);

  // assert
  expect(linkElement).toBeInTheDocument();
});
