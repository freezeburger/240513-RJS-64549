import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FeatUserCard from './FeatUserCard';

describe('<FeatUserCard />', () => {
  test('it should mount', () => {
    render(<FeatUserCard />);
    
    const element = screen.getByTestId('FeatUserCard');

    expect(FeatUserCard).toBeInTheDocument();
  });
});