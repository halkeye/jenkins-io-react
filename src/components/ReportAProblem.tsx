import React from 'react';
import dedent from 'dedent-js';

interface ReportAProblemProps {
  title?: string | null
  url?: string | null
  sourcePath?: string | null
  githubRepo?: string | null
}

function ReportAProblem ({ title, url, sourcePath, githubRepo }: ReportAProblemProps): JSXNode {
  if (!sourcePath || !githubRepo) { return null; }

  const _document = typeof document !== 'undefined' ? document : { title: 'Unknown' };
  const _location = typeof location !== 'undefined' ? location : { href: 'http://unknown' };

  if (!url) {
    url = _location.href;
  }

  if (!title) {
    title = _document.title;
  }

  if (!title) {
    title = url;
  }

  const queryParams = new URLSearchParams();
  queryParams.append('labels', 'bug');
  queryParams.append('template', '4-bug.md');
  queryParams.append('title', `${title} page - TODO: Put a summary here`);
  queryParams.append('body', dedent`
        Problem with the [${title}](${url}) page,
        [source file](https://github.com/${githubRepo}/tree/master/src/${sourcePath})

        TODO: Describe the expected and actual behavior here

        # Screenshots

        TODO: Add screenshots if possible

        # Possible Solution

        <!-- If you have suggestions on a fix for the bug, please describe it here. -->

        N/A`);
  const pluginSiteReportUrl = `https://github.com/${githubRepo}/issues/new?${queryParams.toString()}`;
  return (
        <a href={pluginSiteReportUrl} title={`Report a problem with ${sourcePath}`}>
            <ion-icon class="report" name="warning" />
            Report a problem
        </a>
  );
}

ReportAProblem.displayName = 'ReportAProblem';

export default ReportAProblem;
