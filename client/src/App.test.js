import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// DISPLAY TITLE TEST //

test('Title displayed', () => {
  const { getByTestId } = rt1.render(<App />);
  getByTestId(/title/i)
})

// DISPLAY TOGGLE TEST //

test("displays toggle function", () => {
  const { getByTestId } = rt1.render(<App />);
  getByTestId("toggle");
});

// RENDER TEST //

test('renders without crashing', () => {
  rt1.render(<App />);
});

// RENDER HEADER //

test('Renders Header', () => {
  const { getByText } = render(<App />);
  const header = getByText(/Soccer Data Return Confirmed/i);
}) 