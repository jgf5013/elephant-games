import { Story, Meta } from '@storybook/react';
import { Auth, AuthProps } from './auth';

export default {
  component: Auth,
  title: 'Auth',
} as Meta;

const Template: Story<AuthProps> = (args: any) => <Auth {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
