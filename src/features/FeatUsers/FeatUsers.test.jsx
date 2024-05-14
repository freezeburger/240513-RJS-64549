import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FeatUsers from './FeatUsers';

describe('<FeatUsers />', () => {
  test('it should mount', () => {
    render(<FeatUsers />);
    
    const element = screen.getByTestId('FeatUsers');

    expect(FeatUsers).toBeInTheDocument();
  });
});