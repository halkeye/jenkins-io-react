import React from 'react';
import { render, screen } from '@testing-library/react';

import ImproveThisPage from '../components/ImproveThisPage';

describe('ImproveThisPage', () => {
  test('Should show nothing by default', async () => {
    const { container } = render(<ImproveThisPage />);
    expect(container).toBeEmptyDOMElement();
  });
  test('Should show nothing by with just sourcePath ', async () => {
    const { container } = render(<ImproveThisPage sourcePath="/soucePath" />);
    expect(container).toBeEmptyDOMElement();
  });
  test('Should show nothing by with just githubRepo ', async () => {
    const { container } = render(<ImproveThisPage githubRepo="/githubRepo" />);
    expect(container).toBeEmptyDOMElement();
  });
  test('Should everything with sourcePath and githubRepo', async () => {
    render(<ImproveThisPage sourcePath="source/path" githubRepo="github/repo" />);
    const linkElement = screen.getByText(/Improve this page/);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', 'https://github.com/github/repo/edit/main/source/path');
    expect(linkElement).toHaveAttribute('title', 'Edit source/path on GitHub');
  });
});
