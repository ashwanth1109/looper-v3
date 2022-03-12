import React from 'react';
import { render } from '@testing-library/react';
import { BasicArtistFilter } from './artist-filter.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicArtistFilter />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
