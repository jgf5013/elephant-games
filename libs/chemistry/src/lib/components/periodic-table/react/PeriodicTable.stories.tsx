import { Story, Meta } from '@storybook/react';
import { PeriodicTable } from './PeriodicTable';

export default {
  component: PeriodicTable,
  title: 'PeriodicTable',
} as Meta;

const Template: Story<> = (args) => <PeriodicTable {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
