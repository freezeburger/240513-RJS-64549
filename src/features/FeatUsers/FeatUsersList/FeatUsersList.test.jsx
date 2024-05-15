import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FeatUsersList from './FeatUsersList';

describe('<FeatUsersList />', () => {
  test('it should mount', () => {
    render(<FeatUsersList />);
    
    const element = screen.getByTestId('FeatUsersList');

    expect(FeatUsersList).toBeInTheDocument();
  });
});