import React from 'react';
import PropTypes from 'prop-types';

type ImproveThisPageProps = {
    sourcePath?: string
    githubRepo?: string
}

function ImproveThisPage({sourcePath, githubRepo}: ImproveThisPageProps) : JSXNode {
    if (!sourcePath) { return; }
    if (!githubRepo) { return; }
    return (
        <a href={`https://github.com/${githubRepo}/edit/main/${sourcePath}`} title={`Edit ${sourcePath} on GitHub`}>
            <ion-icon name="logo-github" style={{ color: 'black' }}></ion-icon>
            Improve this page
        </a>
    );
}

ImproveThisPage.propTypes = {
    sourcePath: PropTypes.string,
    githubRepo: PropTypes.string
};

ImproveThisPage.displayName = "ImproveThisPage"

export default ImproveThisPage;
