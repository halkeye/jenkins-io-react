import React from 'react';
import TimeAgo from 'react-timeago';
import enStrings from 'react-timeago/lib/language-strings/en';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';

interface SiteVersionProps {
  commit: string
  githubRepo: string
  buildTime: string
}

export const formatter = buildFormatter(Object.assign(enStrings, {
  week: 'a week',
  weeks: '%d weeks'
}));

function SiteVersion ({ buildTime, githubRepo, commit }: SiteVersionProps): JSXNode {
  return (
        <p>
            <a href={`https://github.com/${githubRepo}/commit/${commit}`}>{commit.substring(0, 7)}</a>
            <br />
            <small>
                Last Built:
                {typeof window !== 'undefined' ? <TimeAgo date={new Date(buildTime)} formatter={formatter}/> : buildTime}
            </small>
        </p>
  );
}

SiteVersion.defaultProps = {
  commit: 'unknown'
};

SiteVersion.displayName = 'SiteVersion';

export default SiteVersion;
