import React from 'react';

import SiteVersion from './SiteVersion';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const story: ComponentMeta<typeof SiteVersion> = {
  title: 'SiteVersion',
  component: SiteVersion
};

export default story;

const Template: ComponentStory<typeof SiteVersion> = (args) => <SiteVersion {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  commit: 'unknown',
  githubRepo: 'halkeye/jenkins-io-react',
  buildTime: 1662950041000
};
