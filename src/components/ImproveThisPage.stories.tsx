import React from 'react';

import ImproveThisPage from './ImproveThisPage';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const story: ComponentMeta<typeof ImproveThisPage> = {
  title: 'ImproveThisPage',
  component: ImproveThisPage
};

export default story;

const Template: ComponentStory<typeof ImproveThisPage> = (args) => <ImproveThisPage {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  sourcePath: 'source/path',
  githubRepo: 'halkeye/jenkins-io-react'
};
