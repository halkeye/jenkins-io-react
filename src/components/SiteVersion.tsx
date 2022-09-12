import React from 'react';
import TimeAgo from 'react-timeago';
// @ts-expect-error
import enStrings from 'react-timeago/lib/language-strings/en';
// @ts-expect-error
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';

interface SiteVersionProps {
  commit?: string
  githubRepo?: string | null
  buildTime?: number
}

export const formatter = buildFormatter(Object.assign(enStrings, {
  week: 'a week',
  weeks: '%d weeks'
}));

function SiteVersion ({ buildTime = 0, githubRepo, commit }: SiteVersionProps): JSXNode {
  if (!commit && buildTime === 0 && !githubRepo) { return null; }
  return (
        <p>
            {githubRepo && commit && <a href={`https://github.com/${githubRepo}/commit/${commit}`}>{commit.substring(0, 7)}</a>}
            {buildTime > 0 && (
              <>
                <br />
                <small>
                  Last Built:
                  {typeof window !== 'undefined' ? <TimeAgo date={new Date(buildTime)} formatter={formatter}/> : buildTime}
                </small>
              </>
            )}
        </p>
  );
}

SiteVersion.displayName = 'SiteVersion';

export default SiteVersion;
