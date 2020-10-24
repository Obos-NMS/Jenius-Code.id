import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("Initial Page", () => {
  test("There is title page in our landing page", () => {
    const { getByText } = render(<App />)
    const landingTitle = getByText(/Naufal/i)
    expect(landingTitle).toBeInTheDocument()
  })
  test("There is website name at top of landing page", () => {
    const { getByTestId } = render(<App />)
    const websiteName = getByTestId("website-name")

    expect(websiteName).toBeInTheDocument()
    expect(websiteName).toHaveTextContent(/Naufal/i)
  })

})