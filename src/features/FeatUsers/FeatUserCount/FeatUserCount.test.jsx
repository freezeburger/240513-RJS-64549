import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FeatUserCount from './FeatUserCount';

describe('<FeatUserCount />', () => {
  test('it should mount', () => {
    render(<FeatUserCount />);
    
    const element = screen.getByTestId('FeatUserCount');

    expect(FeatUserCount).toBeInTheDocument();
  });
});