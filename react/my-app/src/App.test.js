import { render, screen } from '@testing-library/react';
import {App} from './App';
import Header from './App';
import{LoginBox} from './App'

test('renders learn react link', () => {
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
