import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';


test('renders header', () => {

  const { getByText } =render(<App />);
  const header = getByText(/INTERNATIONAL WOMEN'S SOCCER ROSTER/i);
  expect(header).toBeInTheDocument();
});

test('if we are rendering player title text', () => {

  const { getByText } =render(<App />);
  const header = getByText(/Players/i);
  expect(header).toBeInTheDocument();
});

test('card shows up', async () => {
  const {findByText} = render(<App/>)
  const card = await findByText(/Alex Morgan/i)
  expect(card).toBeInTheDocument()

})

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});