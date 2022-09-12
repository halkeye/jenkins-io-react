import React from 'react';
import { render, screen, within } from '@testing-library/react';

import SiteVersion from '../components/SiteVersion';

describe('SiteVersion', () => {
  test('Should show nothing by default', async () => {
    const { container } = render(<SiteVersion />);
    expect(container).toBeEmptyDOMElement();
  });
  test('with all parameters renders right', async () => {
    render(<SiteVersion buildTime={1662950041000} commit="abc1234" githubRepo="github/repo" />);
    const commitElement = screen.getByText(/abc1234/);
    expect(commitElement).toBeInTheDocument();
    expect(commitElement).toHaveAttribute('href', 'https://github.com/github/repo/commit/abc1234');

    const smallElement = screen.getByText(/Last Built/);
    expect(smallElement).toBeInTheDocument();

    const timeElement = within(smallElement).getByText(/ ago/);
    expect(timeElement).toHaveAttribute('datetime');
    expect(timeElement).toHaveAttribute('title');
  });
});
