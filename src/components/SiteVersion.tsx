import React from 'react';
import PropTypes from 'prop-types';
import TimeAgo from 'react-timeago';
import enStrings from 'react-timeago/lib/language-strings/en';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';

export const formatter = buildFormatter(Object.assign(enStrings, {
    'week': 'a week',
    'weeks': '%d weeks',
}));

function SiteVersion({buildTime, githubRepo, commit}) {
    return (
        <p>
            <a href={`https://github.com/${githubRepo}/commit/${commit}`}>{commit.substr(0, 7)}</a>
            <br />
            <small>
                Last Built:
                {typeof window !== 'undefined' ? <TimeAgo date={new Date(buildTime)} formatter={formatter}/> : buildTime}
            </small>
        </p>
    );
}

SiteVersion.defaultProps = {
    commit: 'unknown',
    githubRepo: 'jenkins-infra/unknown',
};

SiteVersion.propTypes = {
    commit: PropTypes.string,
    githubRepo: PropTypes.string,
    buildTime: PropTypes.string.isRequired
}

SiteVersion.displayName = "SiteVersion"

export default SiteVersion;
