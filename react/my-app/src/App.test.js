import { render, screen } from '@testing-library/react';
import {App} from './App';
import Header from './App';
import MyApp from './App';

test('renders learn react link', () => {
  render(<MyApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
