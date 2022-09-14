import React from 'react';

import ReportAProblem from './ReportAProblem';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const story: ComponentMeta<typeof ReportAProblem> = {
  title: 'ReportAProblem',
  component: ReportAProblem
};

export default story;

const Template: ComponentStory<typeof ReportAProblem> = (args) => <ReportAProblem {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  sourcePath: 'source/path',
  githubRepo: 'halkeye/jenkins-io-react'
};
