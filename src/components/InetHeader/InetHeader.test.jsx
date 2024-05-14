import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InetHeader from './InetHeader';

describe('<InetHeader />', () => {
  test('it should mount', () => {
    render(<InetHeader />);
    
    const element = screen.getByTestId('InetHeader');

    expect(InetHeader).toBeInTheDocument();
  });
});