// Notifications.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Notifications from './Notifications';

test('renders Notifications without crashing', () => {
  render(<Notifications />);
});

test('renders three list items', () => {
  const { getAllByRole } = render(<Notifications />);
  const listItems = getAllByRole('listitem');
  expect(listItems.length).toBe(3);
});

test('renders the text "Here is the list of notifications"', () => {
  const { getByText } = render(<Notifications />);
  const textElement = getByText('Here is the list of notifications');
  expect(textElement).toBeInTheDocument();
});
