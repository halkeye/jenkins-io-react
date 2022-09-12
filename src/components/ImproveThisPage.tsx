import React from 'react';

export interface ImproveThisPageProps {
  sourcePath?: string | null
  githubRepo?: string | null
}

function ImproveThisPage ({ sourcePath, githubRepo }: ImproveThisPageProps): JSXNode {
  if (!sourcePath) { return null; }
  if (!githubRepo) { return null; }
  return (
        <a href={`https://github.com/${githubRepo}/edit/main/${sourcePath}`} title={`Edit ${sourcePath} on GitHub`}>
            <ion-icon name="logo-github" style={{ color: 'black' }}></ion-icon>
            Improve this page
        </a>
  );
}

ImproveThisPage.displayName = 'ImproveThisPage';

export default ImproveThisPage;
