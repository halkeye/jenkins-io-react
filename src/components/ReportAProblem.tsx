import React from 'react';
import PropTypes from 'prop-types';

function ReportAProblem({title, url, sourcePath, githubRepo}) {
    const _document = typeof document !== `undefined` ? document : {};

    const queryParams = new URLSearchParams();
    queryParams.append("labels", "bug");
    queryParams.append("template", "4-bug.md");
    queryParams.append("title", `${title || _document.title} page - TODO: Put a summary here`);
    queryParams.append("body", `
        Problem with the [${title || _document.title}](${url}) page,
        [source file](https://github.com/${githubRepo}/tree/master/src/${sourcePath})

        TODO: Describe the expected and actual behavior here

        Screenshots

        TODO: Add screenshots if possible

        Possible Solution

        <!-- If you have suggestions on a fix for the bug, please describe it here. --

        /A`);
    const pluginSiteReportUrl = `https://github.com/${githubRepo}/issues/new?${queryParams.toString()}`;
    return (
        <a href={pluginSiteReportUrl} title={`Report a problem with ${sourcePath}`}>
            <ion-icon class="report" name="warning" />
            Report a problem
        </a>
    );
}

ReportAProblem.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string,
    sourcePath: PropTypes.string
};

ReportAProblem.displayName = "ReportAProblem"

export default ReportAProblem;
