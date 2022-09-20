import React from 'react';
import { render, screen } from '@testing-library/react';

import ReportAProblem from '../components/ReportAProblem';

describe('ReportAProblem', () => {
  test('Should show nothing by default', async () => {
    const { container } = render(<ReportAProblem />);
    expect(container).toBeEmptyDOMElement();
  });
  test('Should show nothing by with just sourcePath ', async () => {
    const { container } = render(<ReportAProblem sourcePath="/sourcePath" />);
    expect(container).toBeEmptyDOMElement();
  });
  test('Should show nothing by with just githubRepo ', async () => {
    const { container } = render(<ReportAProblem githubRepo="/githubRepo" />);
    expect(container).toBeEmptyDOMElement();
  });
  test('with no title, it pulls from the document', async () => {
    document.title = 'document title';
    render(<ReportAProblem sourcePath="source/path" githubRepo="github/repo" />);
    const linkElement = screen.getByText(/Report a problem/);
    expect(linkElement).toBeInTheDocument();
    const hrefURL = new URL(linkElement.getAttribute('href')?.toString() as string);
    expect(linkElement).toHaveAttribute('href', expect.stringMatching(/https:\/\/github.com\/github\/repo\/issues\/new/));
    expect(linkElement).toHaveAttribute('href', expect.stringMatching(/title=document\+title\+page/));
    expect(linkElement).toHaveAttribute('href', expect.stringMatching(/%28http%3A%2F%2Flocalhost%2F%29/));
    expect(linkElement).toHaveAttribute('title', 'Report a problem with source/path');
    expect(hrefURL.searchParams.get('title')).toEqual('document title page - TODO: Put a summary here')
    expect(hrefURL.searchParams.get('body')?.split('\n')?.filter(line => line.startsWith(' '))).toEqual([])
  });
  test('with no url, it pulls from location', async () => {
    render(<ReportAProblem sourcePath="source/path" githubRepo="github/repo" title="thingie" />);
    const linkElement = screen.getByText(/Report a problem/);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', expect.stringMatching(/https:\/\/github.com\/github\/repo\/issues\/new/));
    expect(linkElement).toHaveAttribute('href', expect.stringMatching(/title=thingie\+page/));
    expect(linkElement).toHaveAttribute('href', expect.stringMatching(/%28http%3A%2F%2Flocalhost%2F%29/));
    expect(linkElement).toHaveAttribute('title', 'Report a problem with source/path');
  });
  test('build correct body with all props provided it', async () => {
    render(<ReportAProblem sourcePath="source/path" githubRepo="github/repo" title="this title" url="https://site.com/path/to/page" />);
    const linkElement = screen.getByText(/Report a problem/);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', expect.stringMatching(/https:\/\/github.com\/github\/repo\/issues\/new/));
    expect(linkElement).toHaveAttribute('href', expect.stringMatching(/title=this\+title\+page\+-\+/));
    expect(linkElement).toHaveAttribute('href', expect.stringMatching(/%28https%3A%2F%2Fsite.com%2Fpath%2Fto%2Fpage%29/));
    expect(linkElement).toHaveAttribute('title', 'Report a problem with source/path');
  });
});
