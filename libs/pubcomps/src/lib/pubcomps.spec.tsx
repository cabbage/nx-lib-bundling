import { render } from '@testing-library/react';

import Pubcomps from './pubcomps';

describe('Pubcomps', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Pubcomps />);
    expect(baseElement).toBeTruthy();
  });
});
